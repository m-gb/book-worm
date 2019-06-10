import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BookService, IBook } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: IBook[];

  constructor(private titleService: Title, private bs: BookService) { }

  ngOnInit() {
    this.titleService.setTitle('Book Worm');
    this.bs.getBooks().subscribe((data: IBook[]) => {
      this.books = data;
    });
  }

}
