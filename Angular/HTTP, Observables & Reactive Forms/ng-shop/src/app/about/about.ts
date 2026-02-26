import { Component } from '@angular/core';
import { ImageBanner } from '../image-banner/image-banner';

@Component({
  selector: 'app-about',
  imports: [ImageBanner],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  images: string[] = ['images/about1.jpg', 'images/about2.jpg'];
}
