import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  isLoggedIn: boolean = false;
  form: any;

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoggedIn = true;

    this.userService
      .login({
        email: form.value.email,
        password: form.value.password,
      })
      .subscribe(
        () => {
          this.router.navigate(['/books']);
        },
        (error: any) => {}
      );
  }
}
