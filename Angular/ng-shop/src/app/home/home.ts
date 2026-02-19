import { Component, inject } from '@angular/core';
import { ImageBanner } from '../image-banner/image-banner';
import { ProductsList } from '../products-list/products-list';
import { data } from '../data';
import { CategoryBanner } from '../category-banner/category-banner';
import { ProductState } from '../product-state.service';

@Component({
  selector: 'app-home',
  imports: [ImageBanner, ProductsList, CategoryBanner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  globalState = inject(ProductState);
  laptops = this.globalState.getProductsByCategory('laptops');
  mensShoe = this.globalState.getProductsByCategory('mens-shoes');
  mensWatches = this.globalState.getProductsByCategory("mens-watches")
}
