import { Component } from '@angular/core';
import { ImageBanner } from '../image-banner/image-banner';
import { ProductsList } from '../products-list/products-list';
import { data } from '../data';
import { CategoryBanner } from '../category-banner/category-banner';

@Component({
  selector: 'app-home',
  imports: [ImageBanner, ProductsList,CategoryBanner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  products =data
}
