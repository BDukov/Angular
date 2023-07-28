import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksPageComponent } from './books-page/books-page.component';
import { QuotesComponent } from './quotes/quotes.component';
import { BooksRoutingModule } from './books-routing.module';
import { NewBookComponent } from './new-book/new-book.component';
import { FormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';



@NgModule({
  declarations: [
    BooksPageComponent,
    QuotesComponent,
    NewBookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ],
  exports: [
    BooksPageComponent,
    BookDetailsComponent,
    NewBookComponent
  ]
})
export class BooksModule { }
