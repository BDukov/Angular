import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    
  }

  login(form: NgForm){
    if(form.invalid) {
      return
    }
   
    this.auth.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }
}
