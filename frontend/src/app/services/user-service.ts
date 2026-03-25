import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  async getUserById(id: number): Promise<User> {
    return firstValueFrom(this.http.get<User>(`${this.apiUrl}/${id}`));
  }

  async updateUser(user: User): Promise<User> {
    return firstValueFrom(this.http.put<User>(`${this.apiUrl}/${user.id}`, user));
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const users = await firstValueFrom(this.http.get<User[]>(this.apiUrl));
    return users.find((u) => u.username === username);
  }

  async register(user: any): Promise<any> {
    const response = await fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Failed to register');
    }

    return await response.json();
  }
}
