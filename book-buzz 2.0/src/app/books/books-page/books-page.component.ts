import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from 'src/app/types/book';
import { map } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css'],
  animations: [
    trigger('bookLi', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(100px)'
        }),
        animate(500)
      ])
    ])
  ]
})
export class BooksPageComponent implements OnInit {
  booksList: Book[] | any = [];
  comments: string[] = [];
  isLoading: boolean = true;
  isThereBooks: boolean = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService
      .getBooks()
      .pipe(
        map(
          (responseData: {
            [x: string]: any;
            hasOwnProperty: (arg0: string) => any;
          }) => {
            const BooksArray = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                BooksArray.push({ ...responseData[key], id: key });
              }
            }
            return BooksArray;
          }
        )
      )
      .subscribe((books) => {
        this.isLoading = false;
        this.booksList = books;
        if (this.booksList.length > 0) {
          this.isThereBooks = true;
        }
      });
  }
}
