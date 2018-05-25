import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: any[];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  deleteBook() {
    alert('Process is in progress')
  }
  editBook() {
    this.router.navigate(['/edit'])
  }
}
