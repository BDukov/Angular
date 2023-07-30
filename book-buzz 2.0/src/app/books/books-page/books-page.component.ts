import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from 'src/app/types/book';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css'],
})
export class BooksPageComponent implements OnInit {
  booksList: Book[] | any;
  comments: string[] = [];
  newArr = {};

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // this.bookService.getBooks().subscribe({
    //   next: <Book>(book: Book) => {
    //     this.booksList = book;
    //     let key = Object.keys(this.booksList);
    //     let value = Object.values(this.booksList);
    //     // this.booksList = value;
    //      console.log(this.booksList);

    //   },
    //   error: (err: any) => {
    //     console.log(`Eroor: ${err}`);
    //   },
    // });

    this.bookService.getBooks().pipe(map((responseData: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }) => {
      const BooksArray = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          BooksArray.push({...responseData[key], id: key})
        }
      }
      return BooksArray;
    })).subscribe(books => {
      this.booksList = books;
    });
  }
}
