import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Products } from './Pages/products/products';
import { About } from './Pages/about/about';
import { Details } from './Pages/details/details';

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
    path: 'details/:id',
    component: Details ,
  },
  {
    path: 'about',
    component: About,
  },
];
