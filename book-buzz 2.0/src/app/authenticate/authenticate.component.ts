import { Component } from '@angular/core';
import { UserServiceService } from '../user/user-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent {
  isAuthenticating = false;

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    let data = this.userService.currentUser;
    if(data){
      this.isAuthenticating = true
    }
  }
}
