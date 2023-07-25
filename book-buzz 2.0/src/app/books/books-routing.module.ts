import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BooksPageComponent } from "./books-page/books-page.component";
import { QuotesComponent } from "./quotes/quotes.component";
import { NewBookComponent } from "./new-book/new-book.component";


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
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BooksRoutingModule { }