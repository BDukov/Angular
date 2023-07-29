import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user/user-service.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit{
  isAuthenticated = true;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    //
  }
}
