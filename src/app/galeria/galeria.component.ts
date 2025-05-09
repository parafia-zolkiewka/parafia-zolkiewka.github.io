import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { Folder } from './folder';
import { ImagePreviewComponent } from './image-preview/image-preview.component';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    RouterModule,
    ImagePreviewComponent,
    MatIconModule,
    MatProgressSpinnerModule,
    ImagePreviewComponent,
  ],
  templateUrl: './galeria.component.html',
})
export class GaleriaComponent implements OnInit {
  private httpClient = inject(HttpClient);

  public imageIds: string[] = [];
  public selectedImage: string | undefined;
  public showImagePreview: boolean = false;
  public currentIndex: number = 0;

  ngOnInit(): void {
    this.httpClient
      .get(`assets/zdjecia.json`, {
        responseType: 'text',
      })
      .subscribe((data) => {
        const folders: Folder[] = JSON.parse(data);
        this.imageIds = folders.reduce<string[]>((acc, folder) => {
          return [...acc, ...folder.fileIds];
        }, []);
        this.currentIndex = 0;
      });
  }

  selectImage(imageIndex: number) {
    this.showImagePreview = true;
    this.currentIndex = imageIndex;
  }

  moveLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  moveRight() {
    if (this.currentIndex < this.imageIds.length - 1) {
      this.currentIndex++;
    }
  }
}
