import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.fetchBookDetails();
  }

  fetchBookDetails(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('bookId');
    console.log(id);
    
    // this.bookService.getBookDetails(id).subscribe((book) => {
    //   this.book = book;
    // });
  }
}
