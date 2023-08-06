import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  loginMessage: undefined | string;

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
        (error: any) => {
          this.loginMessage = error.message;
          setTimeout(() => {
            this.loginMessage = undefined;
            console.log(error.message)
          }, 3000)
          
        }
      );
  }
}
