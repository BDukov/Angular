import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

interface Profile {
  email: string;
  userId: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  isEditMode: boolean = false;

  profileDetails: Profile = {
    email: '',
    userId: '',
  };

  form = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5)]],
    userId: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    let data = this.userService.currentUser;
    let userEmail = data.email;
    let userId = data.uid;

    this.profileDetails = {
      email: userEmail,
      userId: userId,
    };

    this.form.setValue({
      email: userEmail,
      userId: userId,
    });
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

 
}
