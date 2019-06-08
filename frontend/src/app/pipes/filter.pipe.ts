import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from 'src/app/services/book.service';
import { BookService } from 'src/app/services/book.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private bs: BookService) { }

  // filters all books based on search input
  transform(books: IBook[], searchText: string): IBook[] {

    if (!books) {
      return [];
    }
    else if (!searchText) {
      return [];
    }
    else {
      return books.filter((b: IBook) => {
        const input = searchText.toLocaleLowerCase();
        const book = this.bs.editTitle(b.title).toLocaleLowerCase();
        return book.includes(input);
      });
    }
  }

}