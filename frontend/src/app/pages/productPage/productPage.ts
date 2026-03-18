import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Category } from '../../models/category';
import { Product } from '../../models/product';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productPage.html',
  styleUrls: ['./productPage.css'],
})
export class ProductPage {
  product = signal<Product | null>(null);

  constructor(private route: ActivatedRoute) {
    // Subscribe to reload on route change ie product/1 to product/2
    this.route.paramMap.subscribe((params: ParamMap) => {
      const productId = params.get('id');
      this.loadProduct(productId);
    });
  }

  //To be re-implemented once the MVC backend exists. Will use a service layer
  //ie: this.product.set(productService.getProductById(this.productId))

  loadProduct(productId: string | null) {
    // Fake categories
    const fakeCategories: Category[] = [
      { id: 1, name: 'Electronics', description: 'Electronics' },
      { id: 2, name: 'Computers', description: 'Laptops, PCs' },
    ];

    if (productId === '1') {
      this.product.set({
        id: 1,
        name: 'Laptop',
        description: 'This is a laptop',
        price: 2499.99,
        imageUrl: 'https://picsum.photos/seed/laptop/400/250',
        categories: [fakeCategories[0], fakeCategories[1]],
      });
    } else if (productId === '2') {
      this.product.set({
        id: 2,
        name: 'Keyboard',
        description: 'This is a keyboard',
        price: 129.99,
        imageUrl: 'https://picsum.photos/seed/keyboard/400/250',
        categories: [fakeCategories[0]],
      });
    } else {
      this.product.set(null);
    }
  }
}
