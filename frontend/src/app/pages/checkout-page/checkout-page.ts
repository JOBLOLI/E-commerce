import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {
  cartItems = signal<Product[]>([
    {
      id: 1,
      name: 'Laptop',
      description: '',
      price: 2499.99,
      rating: 4.5,
      imageUrl: 'https://picsum.photos/seed/laptop/400/250',
      categories: [],
    },
    {
      id: 2,
      name: 'Keyboard',
      description: '',
      price: 129.99,
      rating: 4,
      imageUrl: 'https://picsum.photos/seed/keyboard/400/250',
      categories: [],
    },
  ]);

  total = computed(() => this.cartItems().reduce((sum, item) => sum + item.price, 0));
}
