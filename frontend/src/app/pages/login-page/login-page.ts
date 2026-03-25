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
  email = signal('');
  registerError = signal('');
  registerSuccess = signal('');
  firstName = signal('');
  lastName = signal('');
  address = signal('');

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
  async register() {
    try {
      const newUser = {
        username: this.username(),
        password: this.password(),
        firstName: this.firstName(),
        lastName: this.lastName(),
        email: this.email(),
        address: this.address(),
      };

      const createdUser = await this.userService.register(newUser);

      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userId', createdUser.id.toString());

      localStorage.setItem('username', createdUser.username);

      this.router.navigate(['/account']);
    } catch (err) {
      this.registerError.set('Registration failed. Email may already exist.');
      console.error(err);
    }
  }
}
