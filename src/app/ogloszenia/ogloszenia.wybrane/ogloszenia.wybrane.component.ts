import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import dayjs from 'dayjs';
import { Subscription } from 'rxjs';
import { HtmlRendererComponent } from '../../html-renderer/html-renderer.component';
import { formatDate } from '../../utils';

@Component({
  selector: 'app-ogloszenia.wybrane',
  standalone: true,
  imports: [RouterModule, HtmlRendererComponent],
  templateUrl: './ogloszenia.wybrane.component.html',
  styleUrl: './ogloszenia.wybrane.component.css',
})
export class OgloszeniaWybraneComponent implements OnInit, OnDestroy {
  private httpClient = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private sub: Subscription | undefined;
  public buffer: ArrayBuffer | undefined;
  public dodatkowyBuffer: ArrayBuffer | undefined;
  public title: string = '';

  public content: string = '';
  ngOnInit(): void {
    const that = this;
    that.sub = that.route.params.subscribe((params) => {
      that.httpClient
        .get(`assets/ogloszenia/${params['date']}.html`, {
          responseType: 'arraybuffer',
        })
        .subscribe((buffer) => {
          that.buffer = buffer;
        });
      that.httpClient
        .get(`assets/dodatkowe_ogloszenia/${params['date']}.html`, {
          responseType: 'arraybuffer',
        })
        .subscribe((buffer) => {
          that.dodatkowyBuffer = buffer;
        });
      
      if (dayjs(params['date']).isBefore("2025-06-30")) {
        that.title = `Ogłoszenia ${formatDate(params['date'])}`;
      } else {
        that.title = '';
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
