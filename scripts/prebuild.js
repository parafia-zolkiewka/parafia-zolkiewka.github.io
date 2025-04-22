const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const intencjePath = path.join(__dirname, '..', 'src', 'assets', 'intencje');
const ogloszeniaPath = path.join(__dirname, '..', 'src', 'assets', 'ogloszenia');
const dodatkoweOgloszeniaPath = path.join(__dirname, '..', 'src', 'assets', 'dodatkowe_ogloszenia');
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = 'urn:ietf:wg:oauth:2.0:oob';
const refreshToken = process.env.REFRESH_TOKEN;
const galleryFolderId = process.env.GALLERY_FOLDER_ID;
const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

oAuth2Client.setCredentials({
    refresh_token: refreshToken
});

saveFilenames(intencjePath, path.join(__dirname, '..', 'src', 'assets', 'intencje.json'));
saveFilenames(ogloszeniaPath, path.join(__dirname, '..', 'src', 'assets', 'ogloszenia.json'));
saveFilenames(dodatkoweOgloszeniaPath, path.join(__dirname, '..', 'src', 'assets', 'dodatkowe_ogloszenia.json'));
savePhotos(path.join(__dirname, '..', 'src', 'assets', 'zdjecia.json'));

function saveFilenames(scanPath, savePath) {
    fs.readdir(scanPath, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory (' + scanPath + ') : ' + err);
        }
        let filenames = files.filter(file => file.endsWith('.html')).map(file => file.replace('.html', ''));
        filenames = getLatestDates(filenames);
        fs.writeFile(savePath, JSON.stringify(filenames), (err) => {
            if (err) {
                return console.log('Unable to write file (' + savePath + ') : ' + err);
            };
            console.log(savePath + ' saved');
        });
    });
}

function savePhotos(savePath) {
    getFolders(oAuth2Client).then(result => {
        fs.writeFile(savePath, JSON.stringify(result), (err) => {
            if (err) {
                return console.log('Unable to write file (' + savePath + ') : ' + err);
            };
            console.log(savePath + ' saved');
        });
    });
}

function getLatestDates(dates) {
    // Sort the dates array in descending order
    let sortedDates = dates.sort((a, b) => new Date(b) - new Date(a));

    // Get the 10 latest dates
    let latestDates = sortedDates.slice(0, 10);

    return latestDates;
}

async function getFolders(auth) {
    let galleryFolders = [];
    const drive = google.drive({ version: 'v3', auth });

    try {
        let folderPageToken = null;

        do {
            const foldersResponse = await drive.files.list({
                fields: 'nextPageToken, files(id, name, mimeType)',
                q: "mimeType = 'application/vnd.google-apps.folder' and trashed=false and '" + galleryFolderId + "' in parents",
                pageSize: 1000,
                pageToken: folderPageToken
            });

            const folders = foldersResponse.data.files;

            for (const folder of folders) {
                let fileIds = [];
                let filePageToken = null;

                do {
                    const filesResponse = await drive.files.list({
                        fields: 'nextPageToken, files(id, name, mimeType)',
                        q: "mimeType = 'image/jpeg' and trashed=false and '" + folder.id + "' in parents",
                        pageSize: 1000,
                        pageToken: filePageToken
                    });

                    const files = filesResponse.data.files;
                    fileIds = files.map(file => file.id);
                    filePageToken = filesResponse.data.nextPageToken;
                } while (filePageToken);

                galleryFolders.push(new Folder(folder.name, folder.id, fileIds));
            }
            folderPageToken = foldersResponse.data.nextPageToken;
        } while (folderPageToken);
    } catch (error) {
        console.error('The API returned an error:', error);
        throw error;
    }

    return galleryFolders;
}

class Folder {
    constructor(name, id, fileIds) {
        this.name = name;
        this.id = id;
        this.fileIds = fileIds;
    }
}


