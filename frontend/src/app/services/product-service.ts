import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getProducts(filters?: {
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    minRating?: number;
    categories?: number[];
  }): Observable<Product[]> {
    let params = new HttpParams();

    if (filters) {
      if (filters.search) params = params.set('search', filters.search);
      if (filters.minPrice !== undefined) params = params.set('minPrice', filters.minPrice);
      if (filters.maxPrice !== undefined) params = params.set('maxPrice', filters.maxPrice);
      if (filters.minRating !== undefined) params = params.set('minRating', filters.minRating);
      if (filters.categories?.length) {
        filters.categories.forEach((c) => {
          params = params.append('categories', c);
        });
      }
    }

    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
