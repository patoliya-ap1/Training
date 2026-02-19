import { Component, inject } from '@angular/core';
import { CategoryBanner } from '../../category-banner/category-banner';
import { FormsModule, NgForm } from '@angular/forms';
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
  imports: [CategoryBanner, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './add-product-form.html',
  styleUrl: './add-product-form.css',
})
export class AddProductForm {
  constructor(private router: Router) {}
  globalState = inject(ProductState);
  title = '';
  price = '';
  thumbnail = '';
  description = '';
  onSubmit(form: NgForm): void {
    this.globalState.addProduct({ id: Date.now(), category: 'cloths', ...form.value });
    this.router.navigate(['/products']);
  }
}
