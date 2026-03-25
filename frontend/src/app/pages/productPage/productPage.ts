import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productPage.html',
  styleUrls: ['./productPage.css'],
})
export class ProductPage {
  product = signal<Product | null>(null);

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));

      if (!isNaN(id)) {
        this.loadProduct(id);
      }
    });
  }

  toastVisible = false;

  addToCart() {
    const p = this.product();
    if (p) {
      this.cartService.addToCart(p);
      this.toastVisible = true;
      setTimeout(() => (this.toastVisible = false), 2500); // auto-hides after 2.5s
    }
  }

  loadProduct(id: number) {
    this.productService.getProductById(id).subscribe({
      next: (data) => this.product.set(data),
      error: () => this.product.set(null),
    });
  }
}
