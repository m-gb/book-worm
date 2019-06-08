import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/services/book.service';
import { BookService } from 'src/app/services/book.service';

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

  updateTitle(title: string): string {
    return this.bs.editTitle(title);
  }

  onClickedInside() {
    this.clickedOutside = true;
  }

  onClickedOutside() {
    this.clickedOutside = false;
  }
}