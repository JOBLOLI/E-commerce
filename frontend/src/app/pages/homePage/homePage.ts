import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homePage.html',
  styleUrl: './homePage.css',
})
export class HomePage {
  featuredProducts = signal<Product[]>([
    {
      id: 1,
      name: 'Laptop',
      description: '',
      price: 2499.99,
      imageUrl: 'https://picsum.photos/seed/laptop/400/250',
      categories: [],
    },
    {
      id: 2,
      name: 'Keyboard',
      description: '',
      price: 129.99,
      imageUrl: 'https://picsum.photos/seed/keyboard/400/250',
      categories: [],
    },
    {
      id: 3,
      name: 'Headphones',
      description: '',
      price: 199.99,
      imageUrl: 'https://picsum.photos/seed/headphones/400/250',
      categories: [],
    },
  ]);

  categories = signal<Category[]>([
    { id: 1, name: 'Electronics', description: 'Electronics' },
    { id: 2, name: 'Computers', description: 'Laptops & PCs' },
    { id: 3, name: 'Audio', description: 'Headphones & speakers' },
    { id: 4, name: 'Accessories', description: 'Cables & peripherals' },
  ]);
}
