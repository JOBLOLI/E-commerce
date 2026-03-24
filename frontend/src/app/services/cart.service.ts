import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = signal<CartItem[]>(this.loadFromStorage());

  private loadFromStorage(): CartItem[] {
    const data = localStorage.getItem('cartItems');
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems()));
  }

  getItems() {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    const current = this.cartItems();
    const existing = current.find((i) => i.product.id === product.id);
    if (existing) {
      this.cartItems.set(
        current.map((i) => (i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)),
      );
    } else {
      this.cartItems.set([...current, { product, quantity: 1 }]);
    }
    this.saveToStorage();
  }

  removeFromCart(productId: number): void {
    this.cartItems.set(this.cartItems().filter((i) => i.product.id !== productId));
    this.saveToStorage();
  }

  clearCart(): void {
    this.cartItems.set([]);
    localStorage.removeItem('cartItems');
  }

  total = computed(() =>
    this.cartItems().reduce((sum, i) => sum + i.product.price * i.quantity, 0),
  );
}
