import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-intencje',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './intencje.component.html',
  styleUrl: './intencje.component.css',
})
export class IntencjeComponent implements OnInit, OnDestroy {
  private httpClient = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  private date: string = '';

  public content: string = '';
  public intencje: string[] = [];

  ngOnInit(): void {
    const that = this;
    that.httpClient.get('assets/intencje.json').subscribe((data) => {
      const intencje = data as string[];
      intencje.sort((a, b) => {
        return new Date(b).getTime() - new Date(a).getTime();
      });
      that.date = intencje[0];
      this.intencje = intencje;
      this.intencje.shift();

      that.httpClient
        .get(`assets/intencje/${this.date}.html`, {
          responseType: 'arraybuffer',
        })
        .subscribe((buffer) => {
          const data = new TextDecoder('windows-1250').decode(buffer);

          const parser = new DOMParser();
          const html = parser.parseFromString(data, 'text/html');

          const body = html.getElementsByTagName('body');
          if (body[0]) {
            that.content = that.sanitizer.bypassSecurityTrustHtml(
              body[0].innerHTML
            ) as string;
          }

          const dynamicStyles = document.getElementById('dynamic-styles');
          if (dynamicStyles) {
            const styles = html.getElementsByTagName('style');
            if (styles[0]) {
              dynamicStyles.innerHTML = styles[0].innerHTML;
            }
          }
        });
    });
  }

  ngOnDestroy(): void {
    const dynamicStyles = document.getElementById('dynamic-styles');
    if (dynamicStyles) {
      dynamicStyles.innerHTML = '';
    }
  }
}
