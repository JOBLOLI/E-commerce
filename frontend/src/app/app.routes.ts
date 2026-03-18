import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home';
import { SearchPage } from './pages/search/search';
import { ProductPage } from './pages/product/product';
import { AccountPage } from './pages/account/account';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'search',
    component: SearchPage,
  },
  {
    path: 'product/:id',
    component: ProductPage,
  },
  {
    path: 'account',
    component: AccountPage,
  },
];
