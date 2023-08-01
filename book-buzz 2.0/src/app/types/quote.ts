import { Book } from "./book";

export interface Quote {
    quote: string;
    book: Book;
    author: string;
}