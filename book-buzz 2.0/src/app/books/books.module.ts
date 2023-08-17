import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksPageComponent } from './books-page/books-page.component';
import { QuotesComponent } from './quotes/quotes.component';
import { BooksRoutingModule } from './books-routing.module';
import { NewBookComponent } from './new-book/new-book.component';
import { FormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { SharedModule } from '../shared/shared.module';
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  declarations: [
    BooksPageComponent,
    QuotesComponent,
    NewBookComponent,
    BookDetailsComponent,
    NewQuoteComponent,
    BookEditComponent,
    
  ],
  exports: [
    BooksPageComponent,
    BookDetailsComponent,
    NewBookComponent,
    QuotesComponent,
  ],
  imports: [CommonModule, BooksRoutingModule, FormsModule, SharedModule],
})
export class BooksModule {}
