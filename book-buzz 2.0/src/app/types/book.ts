import { UserId } from './user-id';

export interface Book {
    title: string;
    author: string;
    genre: string;
    image: string;
    description: string;
    reviews: any; //string[] | Post[];
    userId: string;
}