import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from 'src/app/types/book';
import { map } from 'rxjs';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css'],
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
