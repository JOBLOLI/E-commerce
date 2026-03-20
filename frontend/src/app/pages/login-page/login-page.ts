import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  username = signal('');
  password = signal('');
  error = signal('');

  constructor(private router: Router) {}

  login() {
    // temporary hardcoded login, to be re-implemented to get user by username then check if password matches
    if (this.username() === 'jdoe' && this.password() === 'password') {
      localStorage.setItem('loggedIn', 'true');

      this.router.navigate(['/account']);
    } else {
      this.error.set('Invalid username or password');
    }
  }
}
