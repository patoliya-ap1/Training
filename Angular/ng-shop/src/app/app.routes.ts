import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { About } from './about/about';
import { AddProductForm } from './components/add-product-form/add-product-form';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'add-product',
    component: AddProductForm,
  },
  {
    path: 'about',
    component: About,
  },
];
