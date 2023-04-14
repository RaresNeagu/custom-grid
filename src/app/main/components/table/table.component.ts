import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../interfaces/book.interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  BooksList!: Book[];
  isVisible = false;

  constructor(
    private BooksService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((res) => {
      console.log(res);
    });

    this.BooksService.BooksListSubject.subscribe((res) => {
      this.BooksList = [...res];
      console.log('in subscribe ');
    });
  }

  ngOnChanges(): void {
    this.BooksList = this.BooksService.Books;
  }
  ngOnInit(): void {
    this.BooksList = this.BooksService.Books;
    console.log(this.BooksList);
  }

  openModal() {
    this.isVisible = true;
  }

  editBook(Book: Book) {
    // todo

    // *query params
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        BookTitle: Book.title,
      },
      queryParamsHandling: 'merge',
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
