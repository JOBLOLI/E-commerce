import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface OrderHistoryItem {
  orderHistoryId: number;
  orderId: number;
  userId: number;
  itemName: string;
  price: number;
}

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './history-page.html',
  styleUrl: './history-page.css',
})
export class HistoryPage implements OnInit {
  orders = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId') || '1';
    this.http.get<OrderHistoryItem[]>(`http://localhost:8080/api/orders/${userId}`).subscribe({
      next: (data) => {
        const grouped = data.reduce((acc: any, item) => {
          if (!acc[item.orderId]) {
            acc[item.orderId] = {
              id: item.orderId,
              status: 'PROCESSING',
              items: [],
              total: 0,
            };
          }
          acc[item.orderId].items.push({ name: item.itemName, price: item.price });
          acc[item.orderId].total += item.price;
          return acc;
        }, {});

        this.orders.set(Object.values(grouped));
      },
      error: (err) => console.error('Failed to load order history', err),
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'DELIVERED':
        return 'badge bg-success';
      case 'SHIPPED':
        return 'badge bg-primary';
      case 'PROCESSING':
        return 'badge bg-warning text-dark';
      case 'CANCELLED':
        return 'badge bg-danger';
      default:
        return 'badge bg-secondary';
    }
  }
}
