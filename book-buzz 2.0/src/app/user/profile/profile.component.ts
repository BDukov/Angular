import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditMode: boolean = false;

  profileDetails: Profile = {
    firstName: '',
    lastName: '',
    email: ''
  };

  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit(): void {
    const { firstName, lastName, email } = this.userService.user!;
    let data = Object.keys(this.userService.user);
    
    
    ;
    this.profileDetails = {
      firstName,
      lastName,
      email
    };

    this.form.setValue({
      firstName,
      lastName,
      email
    });
  }

}
