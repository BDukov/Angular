import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from 'src/app/types/book';
import { of } from 'rxjs';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css'],
})
export class BooksPageComponent implements OnInit {
  booksList: Book[] | any;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: <Book>(book: Book) => {
        this.booksList = book;
        let key = Object.keys(this.booksList);
        let value = Object.values(this.booksList);
        this.booksList = value;
      },
      error: (err: any) => {
        console.log(`Eroor: ${err}`);
      },
    });
  }
}
