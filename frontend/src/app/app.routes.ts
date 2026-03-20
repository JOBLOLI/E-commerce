import { Routes } from '@angular/router';
import { HomePage } from './pages/homePage/homePage';
import { SearchPage } from './pages/searchPage/searchPage';
import { ProductPage } from './pages/productPage/productPage';
import { AccountPage } from './pages/accountPage/accountPage';
import { LoginPage } from './pages/login-page/login-page';
import { CartPage } from './pages/cart-page/cart-page';
import { CheckoutPage } from './pages/checkout-page/checkout-page';
import { SupportPage } from './pages/support-page/support-page';
import { HistoryPage } from './pages/history-page/history-page';

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
  {
    path: 'cart',
    component: CartPage,
  },
  {
    path: 'checkout',
    component: CheckoutPage,
  },
  {
    path: 'support',
    component: SupportPage,
  },
  {
    path: 'history',
    component: HistoryPage,
  },
];
