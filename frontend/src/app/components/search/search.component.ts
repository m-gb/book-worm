import { Component, OnInit } from '@angular/core';
import { BookService, IBook } from 'src/app/services/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  clickedOutside = true;
  books: IBook[];
  searchText: string;

  constructor(private bs: BookService) { }

  ngOnInit() {
    this.bs.getBooks().subscribe((data: IBook[]) => {
      this.books = data;
    });
  }

  onClickedInside() {
    this.clickedOutside = true;
  }

  onClickedOutside() {
    this.clickedOutside = false;
  }

}