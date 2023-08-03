import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ɵafterNextNavigation } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from 'src/app/types/book';
import { UserServiceService } from 'src/app/user/user-service.service';
import { Review } from 'src/app/types/review';
import { delay } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  isOwner: boolean = false;
  dbUser: string[] = []; 

  book: Book | any;

  newReview: Review = {
    reviewText: '',
    rating: 0,
  };

  review: Review[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private userService: UserServiceService,
    private router: Router
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.fetchBookDetails();
    this.fetchBoookReviews();
  }
 
  ngAfterViewInit() {
    this.isOwnerOfBook();
  }

  isOwnerOfBook() {
    let data = this.userService.currentUser;
    let user = data.uid;
    if (user === this.dbUser[0]) {
      this.isOwner = true;
    }
  }

  fetchBookDetails(): void {
    const id = this.activatedRoute.snapshot.params['bookId'];

    this.bookService.getBookDetails(id).subscribe((book) => {
      this.book = book;
      let createUser = this.book.userId;
      this.dbUser.push(createUser);
    });
  }

  fetchBoookReviews(): void {
    const id = this.activatedRoute.snapshot.params['bookId'];
    this.bookService.getBookReviews(id).subscribe((review?) => {
      this.review = Object.values(review);
    });
  }

  addReview() {
    const id = this.activatedRoute.snapshot.params['bookId'];
    this.bookService.addReview(id, this.newReview).subscribe(
      (res) => {
        this.newReview = { reviewText: '', rating: 0 };
        //reload page
        this.router.navigate([`/books/${id}`]);
      },
      (error) => {
        console.error('Error suubmitting review', error);
      }
    );
  }

  editReview(review: Review) {}
}
