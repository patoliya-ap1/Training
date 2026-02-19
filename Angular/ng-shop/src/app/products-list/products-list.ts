import { Component, Input } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { SlicePipe } from '@angular/common';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
  description: string;
}
@Component({
  selector: 'app-products-list',
  imports: [ProductCard, SlicePipe],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  @Input() products: Product[] = [];
  @Input() limit?: any;
  addToCart(value: string) {
    console.log(value);
  }
}
