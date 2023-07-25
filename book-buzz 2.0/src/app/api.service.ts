import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { Book } from './types/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBooks() {
    const { appUrl } = environment;
    return this.http.get<Book>(`${appUrl}.json`)
  }

//   addNew() {
//     const { appUrl } = environment;
//     return this.http.post<Book>(`${appUrl}.json`, data )
//   }
}
