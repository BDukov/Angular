import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { map } from 'rxjs';
import { Quote } from 'src/app/types/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent {
  quotesList: Quote[] | any;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getQuotes().subscribe({
      next: <Quote>(quote: Quote) => {
        this.quotesList = quote;
        let key = Object.keys(this.quotesList);
        let value = Object.values(this.quotesList);
        this.quotesList = value;
      },
      error: (err: any) => {
        console.log(`Eroor: ${err}`);
      },
    });
  }
}
