import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './accountPage.html',
  styleUrls: ['./accountPage.css'],
})
export class AccountPage {
  user = signal<User | null>(null);
  editing = signal(false);
  editUser = signal<User | null>(null);
  error = signal('');

  constructor(
    private router: Router,
    private userService: UserService,
  ) {
    const loggedIn = localStorage.getItem('loggedIn');
    const userId = localStorage.getItem('userId');

    if (!loggedIn || !userId) {
      this.router.navigate(['/login']);
    } else {
      this.loadUser(+userId);
    }
  }

  async loadUser(userId: number) {
    try {
      const u = await this.userService.getUserById(userId);
      this.user.set(u);
    } catch (err) {
      console.error(err);
      this.error.set('Failed to load account data.');
    }
  }

  startEdit() {
    const current = this.user();
    if (current) {
      this.editUser.set({ ...current });
      this.editing.set(true);
    }
  }

  cancelEdit() {
    this.editing.set(false);
  }

  async saveProfile() {
    const updated = this.editUser();
    if (!updated) return;

    try {
      const saved = await this.userService.updateUser(updated);
      this.user.set(saved);
      this.editing.set(false);
      this.error.set('');
    } catch (err) {
      console.error(err);
      this.error.set('Failed to save changes.');
    }
  }

  logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
