import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/User';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: User[] = [];

  constructor(
    private userServide: UserService,
    private globalLoaderServide: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(): void {
    this.globalLoaderServide.showLoader();

    // setTimeout(() => {
    this.userServide.fetchUsers().subscribe((users) => {
      this.userList = users;
      // },3000);

      this.globalLoaderServide.hideLoader();
    });
  }

  reloadUsers(): void {
    this.loadUsers();
  }
}
