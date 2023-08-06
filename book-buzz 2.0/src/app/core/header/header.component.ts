import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user!: string;

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  get isLoggedIn(): boolean {
    if (this.userService.isLogged && !this.user) {
      let data = this.userService.currentUser;
      debugger;
      this.user = data.email;
      console.log(this.user);
    }
    return this.userService.isLogged;
  }

  get email(): string {
    return this.userService.user?.email || '';
  }

  logout(): void {
    this.userService.logout().subscribe({
      next: () => {
        this.user = '';
        this.router.navigate(['/']);
      },
      error: () => {
        this.router.navigate(['/']);
        this.user = '';
      },
    });
  }
}
