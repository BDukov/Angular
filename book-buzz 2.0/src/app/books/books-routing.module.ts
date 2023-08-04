import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksPageComponent } from "./books-page/books-page.component";
import { QuotesComponent } from "./quotes/quotes.component";
import { NewBookComponent } from "./new-book/new-book.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { NewQuoteComponent } from "./new-quote/new-quote.component";
import { BookEditComponent } from "./book-edit/book-edit.component";


const routes: Routes = [
    {
        path: 'books',
        component: BooksPageComponent
    },
    {
        path: 'quotes',
        component: QuotesComponent
    },
    {
        path: 'add-new',
        component: NewBookComponent
    },
    {
        path: 'books/:bookId',
        component: BookDetailsComponent
    },
    {
        path: 'add-quote',
        component: NewQuoteComponent
    },
    {
        path: 'books/:bookId/edit',
        component: BookEditComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BooksRoutingModule { }