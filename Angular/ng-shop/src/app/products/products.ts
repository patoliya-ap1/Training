import { Component } from '@angular/core';
import { ProductsList } from '../products-list/products-list';
import { data } from '../data';

@Component({
  selector: 'app-products',
  imports: [ProductsList],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
 products =data
}
