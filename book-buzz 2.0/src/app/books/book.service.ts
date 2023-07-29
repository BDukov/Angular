import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';

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
    return this.http.get(`${appUrl}/books/${id}`);
  }

}
