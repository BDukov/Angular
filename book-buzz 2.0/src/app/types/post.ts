import { Book } from './book';
import {UserId} from './user-id';

export interface Post {
    bookId: Book;
    userId: UserId;
    text: string;
    likes: string[];
}