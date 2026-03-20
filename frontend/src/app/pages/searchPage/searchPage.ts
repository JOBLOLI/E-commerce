import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './searchPage.html',
  styleUrl: './searchPage.css',
})
export class SearchPage {
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

  //To be redone with service using productService.getProducts() once MVC is implemented

  products = signal<Product[]>([
    {
      id: 1,
      name: 'Laptop',
      description: 'High performance gaming laptop',
      price: 2500,
      rating: 4.7,
      imageUrl: 'https://picsum.photos/seed/laptop/400/300',
      categories: [this.categories[0]],
    },
    {
      id: 2,
      name: 'Keyboard',
      description: 'RGB mechanical keyboard',
      price: 150,
      rating: 4.5,
      imageUrl: 'https://picsum.photos/seed/keyboard/400/300',
      categories: [this.categories[2]],
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Premium wireless headphones',
      price: 300,
      rating: 4.8,
      imageUrl: 'https://picsum.photos/seed/headphones/400/300',
      categories: [this.categories[1]],
    },
    {
      id: 4,
      name: 'USB-C Dock',
      description: 'Laptop docking station',
      price: 120,
      rating: 4.1,
      imageUrl: 'https://picsum.photos/seed/usbdock/400/300',
      categories: [this.categories[2]],
    },
  ]);

  filteredProducts = computed(() => {
    //Filter products based on what's currently written in the search
    return this.products().filter((p) => {
      const search = this.searchTerm().toLowerCase();

      //Check for matches in p-name or p-description
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

  toggleCategory(id: number) {
    const current = this.selectedCategories();

    if (current.includes(id)) {
      this.selectedCategories.set(current.filter((c) => c !== id));
    } else {
      this.selectedCategories.set([...current, id]);
    }
  }
}
