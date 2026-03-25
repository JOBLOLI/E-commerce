import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css',
})
export class CheckoutPage {
  constructor(
    public cartService: CartService,
    private http: HttpClient,
    private router: Router,
  ) {}

  cartItems() {
    return this.cartService.getItems()();
  }

  total() {
    return this.cartService.total();
  }

  placeOrder() {
    const orderRequest = {
      userId: 1, // hardcoded for now until auth is implemented
      items: this.cartItems().map((i) => ({
        productId: i.product.id,
        productName: i.product.name,
        quantity: i.quantity,
        price: i.product.price,
      })),
    };

    this.http.post('http://localhost:8080/api/orders', orderRequest).subscribe({
      next: () => {
        this.cartService.clearCart();
        this.router.navigate(['/history']);
      },
      error: (err) => {
        console.error('Order failed', err);
      },
    });
  }
}
