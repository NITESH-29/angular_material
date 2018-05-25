import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: any[];
  bookForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  saveBook() {
    console.log(this.bookForm);
    this.router.navigate(['/book'])
  }
}
