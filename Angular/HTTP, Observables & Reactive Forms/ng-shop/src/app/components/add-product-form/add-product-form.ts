import { Component, inject } from '@angular/core';
import { CategoryBanner } from '../../category-banner/category-banner';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ProductState } from '../../product-state.service';
import { Router } from '@angular/router';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
  description: string;
}

@Component({
  selector: 'app-add-product-form',
  imports: [CategoryBanner, MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './add-product-form.html',
  styleUrl: './add-product-form.css',
})
export class AddProductForm {
  constructor(private router: Router) {}
  globalState = inject(ProductState);
  productForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{2}$/)]),
    thumbnail: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(100)]),
  });
  onSubmit(): void {
    console.log('Run');
    // if (this.productForm.value) {
    //   const newProduct = { id: Date.now(), category: 'cloths', ...this.productForm.value };
    //   this.globalState.addProduct(newProduct);
    //   this.router.navigate(['/products']);
    // }
  }
}
