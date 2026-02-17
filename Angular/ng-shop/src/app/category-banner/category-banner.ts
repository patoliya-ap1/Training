import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-banner',
  imports: [],
  templateUrl: './category-banner.html',
  styleUrl: './category-banner.css',
})
export class CategoryBanner {
  @Input() text?: string = '';
  @Input() image: string = '';
}
