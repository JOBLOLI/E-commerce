import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './history-page.html',
  styleUrl: './history-page.css',
})
export class HistoryPage {
  orders = signal([
    {
      id: 1001,
      date: '2026-01-15',
      status: 'Delivered',
      total: 2629.98,
      items: [
        { name: 'Laptop', price: 2499.99 },
        { name: 'Keyboard', price: 129.99 },
      ],
    },
    {
      id: 1002,
      date: '2026-02-20',
      status: 'Shipped',
      total: 199.99,
      items: [{ name: 'Headphones', price: 199.99 }],
    },
    {
      id: 1003,
      date: '2026-03-10',
      status: 'Processing',
      total: 129.99,
      items: [{ name: 'Keyboard', price: 129.99 }],
    },
  ]);

  getStatusClass(status: string): string {
    switch (status) {
      case 'Delivered':
        return 'badge bg-success';
      case 'Shipped':
        return 'badge bg-primary';
      case 'Processing':
        return 'badge bg-warning text-dark';
      case 'Cancelled':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }
}
