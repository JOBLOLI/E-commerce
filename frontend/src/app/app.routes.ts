import { Routes } from '@angular/router';
import { HomePage } from './pages/homePage/homePage';
import { SearchPage } from './pages/searchPage/searchPage';
import { ProductPage } from './pages/productPage/productPage';
import { AccountPage } from './pages/accountPage/accountPage';

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
