import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FilterPipe } from './filter.pipe';
import { BookService } from 'src/app/services/book.service';

describe('FilterPipe', () => {
  let bs: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ BookService ]
    });
    bs = TestBed.get(BookService);
  });

  it('create an instance', () => {
    const pipe = new FilterPipe(bs);
    expect(pipe).toBeTruthy();
  });
});
