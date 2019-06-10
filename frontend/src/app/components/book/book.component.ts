import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { IBook, BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: IBook;

  constructor(private titleService: Title, private bs: BookService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bs.getBook(params.get('id')).subscribe((data: IBook) => {
        if (data) {
          this.book = data;
          this.titleService.setTitle('Book Worm - ' + this.book.title);
        }
        else {
          this.router.navigate(['/']);
        }
      });
    });
  }
}
