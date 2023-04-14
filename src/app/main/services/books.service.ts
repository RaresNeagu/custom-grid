import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book.interface';
import BooksData from './Books.json'; //! https://www.typescriptlang.org/docs/handBook/release-notes/typescript-2-9.html#new---resolvejsonmodule

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private BooksList: Book[] = BooksData;
  BooksListSubject = new Subject<Book[]>();

  constructor() {}

  get Books(): Book[] {
    return this.BooksList;
  }

  set Books(BooksToSet: any) {
    this.BooksList = BooksToSet;
    this.BooksListSubject.next(BooksToSet);
  }

  addNewBook(book: Book) {
    this.BooksList.push(book);
    this.BooksListSubject.next(this.BooksList);
  }
}
