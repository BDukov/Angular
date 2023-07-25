import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any;

  
  
  constructor(private userService: UserServiceService, private router: Router) {}
  isValid = false;
  
  register(form: NgForm): any {
    
    if(this.form.invalid) {
      return;
    }
    const { firstName, lastName, email, password, passwordConfirm } = form.value;
        
    this.userService
    .register(firstName, lastName, email, password, passwordConfirm)
    .subscribe(() => {
    this.router.navigate(['/books']);
    });
  }

  
 
}


 