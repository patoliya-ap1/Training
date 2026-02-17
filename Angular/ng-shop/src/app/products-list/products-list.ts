import { Component, Input } from '@angular/core';
import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
 @Input() products:any
}
