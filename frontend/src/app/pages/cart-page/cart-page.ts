import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
  constructor(public cartService: CartService) {}

  cartItems() {
    return this.cartService.getItems()();
  }

  total() {
    return this.cartService.total();
  }

  remove(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}
