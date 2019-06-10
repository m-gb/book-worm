import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IBook {
  title: string,
  author: string,
  price: number,
  category: string,
  year: number,
  image_filename: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private uri: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  public getBooks() {
    return this.http.get(`${this.uri}/books`);
  }

  public getBook(id: string) {
    return this.http.get(`${this.uri}/books/${id}`);
  }

}