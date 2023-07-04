import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  
  constructor(private activeRoute: ActivatedRoute, private userService: UserService) {
    console.log('snapshot.data', this.activeRoute.snapshot.data['user']);

    this.activeRoute.params.subscribe((v) =>
    console.log('params.subscribe', v)
    );
    
   }
  
  ngOnInit(): void {}


}
