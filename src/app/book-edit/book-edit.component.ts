import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  book: any[];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  updateBook() {
    console.log(this.bookForm);
    this.router.navigate(['/details'])
  }
}
