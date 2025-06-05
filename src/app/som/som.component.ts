import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HtmlRendererComponent } from '../html-renderer/html-renderer.component';

@Component({
  selector: 'app-som',
  standalone: true,
  imports: [RouterModule, HtmlRendererComponent],
  templateUrl: './som.component.html',
  styleUrl: './som.component.css',
})
export class SomComponent implements OnInit {
  private httpClient = inject(HttpClient);

  public buffer: ArrayBuffer | undefined;

  ngOnInit(): void {
    const that = this;

    that.httpClient
        .get(`assets/standardy_ochrony_maloletnich/som.htm`, {
          responseType: 'arraybuffer',
        })
        .subscribe((buffer) => {
          that.buffer = buffer;
        });
  }
}
