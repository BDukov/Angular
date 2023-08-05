import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { getAuth, updateEmail } from 'firebase/auth';
import { BookService } from 'src/app/books/book.service';
import { map } from 'rxjs';
import { Book } from 'src/app/types/book';

interface Profile {
  email: string;
  userId: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  isEditMode: boolean = false;
  booksList: Book[] = [];
  ownerBooks: Book[] | any = [];

  profileDetails: Profile = {
    email: '',
    userId: '',
  };

  form = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5)]],
    userId: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    let data = this.userService.currentUser;
    let userEmail = data.email;
    let userId = data.uid;

    this.profileDetails = {
      email: userEmail,
      userId: userId,
    };

    this.form.setValue({
      email: userEmail,
      userId: userId,
    });
  }

  ngAfterViewInit() {
    this.getBooks();
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.profileDetails = { ...this.form.value } as Profile;
    const { email, userId } = this.profileDetails;

    const auth = getAuth();
    auth.currentUser &&
      updateEmail(auth.currentUser, email).then(() => {
        this.toggleEditMode();
      });
  }

  getBooks() {
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
        this.booksList = books;
        this.booksList.map((book) => {
          if (book.userId === this.profileDetails.userId) {
            this.ownerBooks.push(book);
          }
        });
      });
  }
}
