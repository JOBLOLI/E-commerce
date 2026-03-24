import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css'],
})
export class LoginPage {
  username = signal('');
  password = signal('');
  error = signal('');

  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  async login() {
    try {
      const user = await this.userService.getUserByUsername(this.username());
      if (user && user.password === this.password()) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('userId', user.id.toString());
        this.router.navigate(['/account']);
      } else {
        this.error.set('Invalid username or password');
      }
    } catch (err) {
      this.error.set('Server error. Please try again.');
      console.error(err);
    }
  }
}
