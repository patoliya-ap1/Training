import { Component, inject, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductState } from '../../product-state.service';
import { ProductsList } from '../../products-list/products-list';
import { Subscription } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number | string;
  thumbnail: string;
  description: string;
}

@Component({
  selector: 'app-product-details',
  imports: [ProductsList, CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  private routeSub: Subscription = new Subscription();
  productId: string | null = null;
  globalState = inject(ProductState);
  relatedProducts: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  product: any | undefined;
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.productId = this.route.snapshot.paramMap.get('id');
      this.product = this.globalState.getProductById(Number(this.productId));
      this.relatedProducts = this.globalState.getRelatedProducts(
        this.product?.category,
        Number(this.productId),
      );
    });
  }

  ngOnChanges() {
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}
