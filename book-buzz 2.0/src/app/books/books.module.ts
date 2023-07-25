import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksPageComponent } from './books-page/books-page.component';
import { BookComponent } from './book/book.component';
import { QuotesComponent } from './quotes/quotes.component';
import { BooksRoutingModule } from './books-routing.module';
import { NewBookComponent } from './new-book/new-book.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BooksPageComponent,
    BookComponent,
    QuotesComponent,
    NewBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ],
  exports: [
    BooksPageComponent,
    BookComponent,
    NewBookComponent
  ]
})
export class BooksModule { }
