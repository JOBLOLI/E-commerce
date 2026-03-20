import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './accountPage.html',
  styleUrl: './accountPage.css',
})
export class AccountPage {
  user = signal<User | null>(null);

  editing = signal(false);

  editUser = signal<User | null>(null);

  //To be re-implemented once the MVC backend exists. Will use a service layer
  //ie: this.user.set(userService.getCurrentUser()(this.productId))

  constructor(private router: Router) {
    const loggedIn = localStorage.getItem('loggedIn');

    if (!loggedIn) {
      this.router.navigate(['/login']);
    }

    this.loadSampleUser();
  }

  loadSampleUser() {
    this.user.set({
      id: 1,
      username: 'jdoe',
      password: 'password',
      email: 'jdoe@email.com',
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St, Montreal, QC',
      joinDate: '2026-03-20',
      role: 'USER',
      status: 'ACTIVE',
    });
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

  saveProfile() {
    //to be re-implemented once the MVC backend exists. will use a service layer
    //ie: this.userService.updateUser(updated).subscribe(u => {
    //this.user.set(u);
    //this.editing.set(false);
    //})

    const updated = this.editUser();
    if (updated) {
      this.user.set(updated);
      this.editing.set(false);
    }
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }
}
