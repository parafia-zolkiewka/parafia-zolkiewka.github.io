import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-image-preview',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './image-preview.component.html',
})
export class ImagePreviewComponent {
  @Input() public imageId: string | undefined = undefined;
  @Input() public first: boolean = false;
  @Input() public last: boolean = false;
  @Input() public progressLabel: string = '';

  @Output() public closePreview = new EventEmitter();
  @Output() public moveRight = new EventEmitter();
  @Output() public moveLeft = new EventEmitter();
}
