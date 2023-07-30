import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from 'src/app/types/book';
import { UserServiceService } from 'src/app/user/user-service.service';
import { Review } from 'src/app/types/review';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book: Book | any;

  newReview: Review = {
    reviewText: '',
    rating: 0,
  };

  review: Review[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private userService: UserServiceService
  ) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.fetchBookDetails();
    this.fetchBoookReviews();
    
  }

  fetchBookDetails(): void {
    const id = this.activatedRoute.snapshot.params['bookId'];

    this.bookService.getBookDetails(id).subscribe((book) => {
      this.book = book;
    });
  }

  fetchBoookReviews(): void {
    const id = this.activatedRoute.snapshot.params['bookId'];
    this.bookService.getBookReviews(id).subscribe((review) => {
        this.review = Object.values(review);
      }
    )
  }

  addReview() {
    const id = this.activatedRoute.snapshot.params['bookId'];
    this.bookService.addReview(id, this.newReview).subscribe(
      () => {
        this.newReview = { reviewText: '', rating: 0 };
      },
      (error) => {
        console.error('Error suubmitting review', error);
      }
    );
  }
}
