import { Routes } from '@angular/router';
import { HomePage } from './pages/homePage/homePage';
import { SearchPage } from './pages/searchPage/searchPage';
import { ProductPage } from './pages/productPage/productPage';
import { AccountPage } from './pages/accountPage/accountPage';
import { LoginPage } from './pages/login-page/login-page';

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
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'account',
    component: AccountPage,
  },
];
