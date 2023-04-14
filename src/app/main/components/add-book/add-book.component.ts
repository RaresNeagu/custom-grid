import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;
  constructor(private fb: FormBuilder, private bookService: BooksService) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      genre: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  add() {
    console.log(this.bookForm.value);
    this.bookService.addNewBook(this.bookForm.value);
  }
}
