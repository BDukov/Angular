import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  @Input() users: User[] = [];

  constructor(private cd: ChangeDetectorRef) {}


  ngOnChanges() {
    console.log('invoked from ngOnChanges');
  }

  refresh() {
    this.cd.detectChanges();
  }
}
