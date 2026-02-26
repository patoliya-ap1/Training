import { Component, Inject, inject, OnInit } from '@angular/core';
import { ProductsList } from '../products-list/products-list';
import { ProductState } from '../product-state.service';
import { FilterInput } from '../components/filter-input/filter-input';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { DataStore } from '../data-store';

@Component({
  selector: 'app-products',
  imports: [ProductsList, FilterInput, MatButtonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  constructor(public dataService: DataStore) {}
  apiProducts: any[] = [];
  // globalState = inject(ProductState);
  // selectedCategory: string = '';
  // products = this.globalState.getProductsByCategory();
  // totalProducts = 6;
  // currentPage = 1;
  // startIndex = (this.currentPage - 1) * this.totalProducts;
  // endIndex = this.startIndex + this.totalProducts;
  // filteredProducts: any[] = this.products;
  // pageCount = Math.ceil(this.filteredProducts.length / this.totalProducts);
  // pageArray = Array.from({ length: this.pageCount }, (_, i) => i + 1);
  // selectCategory(value: string): void {
  //   this.selectedCategory = value;
  //   if (this.selectedCategory) {
  //     this.filteredProducts = this.products.filter(
  //       ({ category }) => category == this.selectedCategory,
  //     );
  //     this.pageCount = Math.ceil(this.filteredProducts.length / this.totalProducts);
  //     this.pageArray = Array.from({ length: this.pageCount }, (_, i) => i + 1);
  //   } else {
  //     this.filteredProducts = [...this.products];
  //     this.pageCount = Math.ceil(this.filteredProducts.length / this.totalProducts);
  //     this.pageArray = Array.from({ length: this.pageCount }, (_, i) => i + 1);
  //   }
  // }
  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      console.log(data);
      this.apiProducts = data;
    });
    // this.dataService.data$.subscribe((data) => {
    //   console.log(data);
    //   this.apiProducts = data;
    // });
  }
}
