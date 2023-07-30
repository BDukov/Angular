import { UserId } from './user-id';

export interface Book {
    title: string;
    author: string;
    genre: string;
    image: string;
    description: string;
    rating: number;
    reviews: any; //string[] | Post[];
    userId: UserId;
}