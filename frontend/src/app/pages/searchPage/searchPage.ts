import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './searchPage.html',
  styleUrls: ['./searchPage.css'],
})
export class SearchPage {
  constructor(private productService: ProductService) {
    this.loadProducts();

    effect(() => {
      this.loadProducts();
    });
  }

  searchTerm = signal('');
  minPrice = signal(0);
  maxPrice = signal(5000);
  minRating = signal(0);
  selectedCategories = signal<number[]>([]);

  categories: Category[] = [
    { id: 1, name: 'Computers', description: '' },
    { id: 2, name: 'Audio', description: '' },
    { id: 3, name: 'Accessories', description: '' },
  ];

  products = signal<Product[]>([]);

  loadProducts() {
    this.productService
      .getProducts({
        search: this.searchTerm(),
        minPrice: this.minPrice(),
        maxPrice: this.maxPrice(),
        minRating: this.minRating(),
        categories: this.selectedCategories(),
      })
      .subscribe({
        next: (data) => this.products.set(data),
        error: (err) => console.error(err),
      });
  }

  //When a category is selected update the "selectedCategories" for the filter
  toggleCategory(id: number) {
    const current = this.selectedCategories();

    if (current.includes(id)) {
      this.selectedCategories.set(current.filter((c) => c !== id));
    } else {
      this.selectedCategories.set([...current, id]);
    }
  }

  //Compute filtered products based on matching search (name or description)
  //Further filter based on price between threshholds, rating, and categories
  filteredProducts = computed(() => {
    return this.products().filter((p) => {
      const search = this.searchTerm().toLowerCase();
      const matchesSearch =
        p.name.toLowerCase().includes(search) || p.description.toLowerCase().includes(search);

      const matchesPrice = p.price >= this.minPrice() && p.price <= this.maxPrice();
      const matchesRating = p.rating >= this.minRating();

      const selected = this.selectedCategories();
      const matchesCategory =
        selected.length === 0 || p.categories.some((c) => selected.includes(c.id));

      return matchesSearch && matchesPrice && matchesRating && matchesCategory;
    });
  });
}
