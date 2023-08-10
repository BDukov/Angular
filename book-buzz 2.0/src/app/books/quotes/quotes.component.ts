import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Quote } from 'src/app/types/quote';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
  animations: [
    trigger('quoteLi', [
      state('in', style({
        opacity: 1,
        transform: 'translateZ(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateZ(-100px)'
        }),
        animate(500)
      ])
    ])
  ]
})
export class QuotesComponent {
  quotesList: Quote[] | any;
  isLoading = true;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getQuotes().subscribe({
      next: <Quote>(quote: Quote) => {
        this.quotesList = quote;
        let key = Object.keys(this.quotesList);
        let value = Object.values(this.quotesList);
        this.quotesList = value;
        this.isLoading = false;
      },
      error: (err: any) => {
        console.log(`Eroor: ${err}`);
      },
    });
  }
}
