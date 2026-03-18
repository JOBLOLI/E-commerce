import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './searchPage.html',
  styleUrl: './searchPage.css',
})
export class SearchPage {
  query = '';
  results = signal<any[]>([]);

  onSearch() {
    // placeholder
    this.results.set([
      { name: 'Example Product 1', price: 10 },
      { name: 'Example Product 2', price: 20 },
    ]);
  }
}
