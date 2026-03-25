import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homePage.html',
  styleUrl: './homePage.css',
})
export class HomePage {
  constructor(private productService: ProductService) {
    this.loadProducts();
  }

  products = signal<Product[]>([]);

  //Default loads first 3 products from product list, might update to add "filteredProducts"
  //Maybe products can have a boolean isFeatured?
  //Or a seperate table of featuredProducts which references product ids.
  loadProducts() {
    this.productService.getProducts({}).subscribe({
      next: (data) => {
        this.products.set(data.slice(0, 3));
      },
      error: (err) => console.error('Failed to load products', err),
    });
  }
}
