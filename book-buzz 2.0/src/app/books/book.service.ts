import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Review } from '../types/review';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService{ 

  constructor(private http: HttpClient ) {  }

  getBooks() {
    const { appUrl } = environment;
    return this.http.get(`${appUrl}/books.json`);
  }

  getBookDetails(id: string) {
    const { appUrl } = environment;
    return this.http.get(`${appUrl}/books/${id}.json`);
  }

  addReview(id: string, review: Review) {
    const { appUrl } = environment;
    return this.http.post(`${appUrl}/books/${id}/reviews.json`, review);
  }

  getBookReviews(id: string) {
    const { appUrl } = environment;
    return this.http.get(`${appUrl}/books/${id}/reviews.json`);
  }


}
