import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { UserServiceService } from 'src/app/user/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/types/book';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})
export class BookEditComponent implements OnInit {
  bookData: undefined | Book | any;
  bookMessage: undefined | string;
  creator: string | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private userService: UserServiceService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    let data = this.userService.currentUser;
    this.creator = data.uid;
    const bookId = this.activatedRoute.snapshot.paramMap.get('bookId');
    bookId &&
      this.bookService.getBookDetails(bookId).subscribe((book) => {
        console.warn(book);
        {
        }
        this.bookData = book;
      });
  }

  submit(data: any) {
    const bookId = this.activatedRoute.snapshot.paramMap.get('bookId');
    if (this.bookData) {
      data.id = bookId;
      data.userId = this.creator;
    }

    bookId &&
      this.bookService.updateBook(bookId, data).subscribe((result) => {
        if (result) {
          this.bookMessage = 'Book has updated';
        }
      });
    setTimeout(() => {
      this.bookMessage = undefined;
    }, 3000);

    this.router.navigate([`/books`]);
  }
}
