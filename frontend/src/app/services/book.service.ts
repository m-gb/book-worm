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
  private uri: string = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  public getBooks() {
    return this.http.get(`${this.uri}/books`);
  }

  public getBook(title: string) {
    return this.http.get(`${this.uri}/books/${title}`);
  }

  // Modifies a given book title to be capitalized and spaced.
  public editTitle(title: string): string {
    if (title) {
      const splitWords: string[] = title.split(' ');
      const uppercaseWords: string[] = splitWords.map(n => n.charAt(0).toUpperCase() + n.slice(1));
      return uppercaseWords.join(' ');
    }
    else {
      return '';
    }
  }
}