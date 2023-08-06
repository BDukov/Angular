import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { UserServiceService } from 'src/app/user/user-service.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
})
export class NewBookComponent implements OnInit {
  creator: string = '';

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    let data = this.userService.currentUser;
    this.creator = data.uid;
  }

  create(createForm: NgForm): void {
    const { appUrl } = environment;
    const { title, author, description, genre, image } = createForm.value;

    if (createForm.valid) {
      this.http
        .post(`${appUrl}/books.json`, {
          title,
          author,
          description,
          genre,
          image,
          userId: this.creator,
        })
        .subscribe((res) => {
          this.router.navigate(['/books']);
        });
    }
  }
}
