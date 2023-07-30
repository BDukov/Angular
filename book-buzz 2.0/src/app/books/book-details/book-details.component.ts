import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from 'src/app/types/book';
import { FormBuilder, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchBookDetails();
  }

  fetchBookDetails(): void {
    const id = this.activatedRoute.snapshot.params['bookId'];
    
    this.bookService.getBookDetails(id).subscribe((book) => {
      this.book = book; 
    });
  }


}
