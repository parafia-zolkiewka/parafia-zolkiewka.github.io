import {
  Component,
  Input,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-html-renderer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './html-renderer.component.html',
  styleUrls: ['./html-renderer.component.css'],
})
export class HtmlRendererComponent implements OnDestroy, AfterViewInit {
  @ViewChild('iframeEl') iframeRef!: ElementRef<HTMLIFrameElement>;

  public iframeSrc: SafeResourceUrl | null = null;
  private blobUrl: string | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  @Input() set buffer(buffer: ArrayBuffer | undefined) {
    if (!buffer) return;

    const utf8Preview = new TextDecoder('utf-8').decode(buffer);
    const charsetMatch = utf8Preview.match(
      /<meta[^>]*charset=["']?\s*([a-zA-Z0-9\-]+)\s*["']?/i
    );
    const charset = charsetMatch?.[1]?.toLowerCase() || 'windows-1250';

    let decodedHtml: string;
    try {
      decodedHtml = new TextDecoder(charset).decode(buffer);
    } catch {
      decodedHtml = new TextDecoder('windows-1250').decode(buffer);
    }

    decodedHtml = decodedHtml.replace(
      /<meta[^>]*charset=["']?.*?["']?[^>]*>/i,
      '<meta charset="UTF-8">'
    );

    const htmlDoc = new DOMParser().parseFromString(decodedHtml, 'text/html');
    const body = htmlDoc.body;
    const wordSections = body.getElementsByClassName('WordSection1');
    const wordSection = wordSections[0];

    if (wordSection) {
      const removeEmptyTag = (
        node: Node | null,
        next: (node: Node | null) => Node | null
      ) => {
        if (!node) return;
        if (node.textContent?.trim() === '' && next(node)) {
          removeEmptyTag(next(node), next);
          wordSection.removeChild(node);
        }
      };

      removeEmptyTag(
        wordSection.lastChild,
        (node) => node?.previousSibling ?? null
      );
      removeEmptyTag(
        wordSection.firstChild,
        (node) => node?.nextSibling ?? null
      );

      const first = wordSection.firstElementChild;
      if (
        first?.nodeName === 'TABLE' &&
        first.querySelectorAll('td, th').length === 1
      ) {
        wordSection.removeChild(first);
      }
    }

    const style = `
      body {
        margin: 0;
        padding: 16px;
        box-sizing: border-box;
        word-wrap: break-word;
        overflow-wrap: break-word;
        white-space: normal;
        font-family: sans-serif;
      }

      table {
        max-width: 100%;
        word-break: break-word;
      }

      * {
        box-sizing: border-box;
      }
    `;

    const styleEl = htmlDoc.createElement('style');
    styleEl.innerHTML = style;
    htmlDoc.head.appendChild(styleEl);

    const fullHtml = `<!DOCTYPE html>\n<html>${htmlDoc.documentElement.innerHTML}</html>`;
    const blob = new Blob([fullHtml], { type: 'text/html' });
    this.blobUrl = URL.createObjectURL(blob);
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.blobUrl);
  }

  resizeIframe(): void {
    const iframe = this.iframeRef?.nativeElement;
    try {
      const height = iframe?.contentWindow?.document.body.scrollHeight;
      if (height) {
        iframe.style.height = `${height}px`;
      }
    } catch (err) {
      console.warn('Could not resize iframe:', err);
    }
  }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void {
    if (this.blobUrl) {
      URL.revokeObjectURL(this.blobUrl);
    }
  }
}
