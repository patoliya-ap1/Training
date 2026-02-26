import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-banner',
  imports: [],
  templateUrl: './image-banner.html',
  styleUrl: './image-banner.css',
})
export class ImageBanner {
  @Input() image!: string;
}
