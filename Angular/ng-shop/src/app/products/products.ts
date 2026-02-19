import { Component, inject, OnInit } from '@angular/core';
import { ProductsList } from '../products-list/products-list';
// import { data } from '../data';
import { ProductState } from '../product-state.service';
import { FilterInput } from '../components/filter-input/filter-input';

@Component({
  selector: 'app-products',
  imports: [ProductsList, FilterInput],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  globalState = inject(ProductState);
  selectedCategory: string = '';
  products = this.globalState.getProductsByCategory();
  filteredProducts: any[] = this.products;
  selectCategory(value: string): void {
    this.selectedCategory = value;
    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(
        ({ category }) => category == this.selectedCategory,
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }
}
