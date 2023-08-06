import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    passwordConfirm: ['', [Validators.required]],
    validators: [matchPasswordsValidator('password', 'passwordConfirm')],
  });

  user!: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router
  ) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const userData: any = Object.assign(this.form.value, {
      email: this.form.value.email,
    });
    console.log(userData);

    this.userService
      .register(userData)
      .then((res: any) => {
        this.router.navigate(['/auth/login']);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }
}
