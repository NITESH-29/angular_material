import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane', age: '30' },
    { name: 'Dany', gender: 'Male', company: 'KFC', age: '35' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', age: '25' },
    { name: 'Nitesh', gender: 'Male', company: 'smartdata', age: '26' },
    { name: 'Kapil', gender: 'Male', company: 'smartdata', age: '30' },
    { name: 'Suresh', gender: 'Male', company: 'Accenture', age: '10' },
    { name: 'Raaj', gender: 'Male', company: 'TCS', age: '70' },
    { name: 'Raaj', gender: 'Male', company: 'TCS', age: '70' },
    { name: 'Shahrukh', gender: 'Male', company: 'CTS', age: '40' },
    { name: 'Salman', gender: 'Male', company: 'c++', age: '39' },
    
    { name: 'Kat', gender: 'female', company: 'smartdata', age: '23' },
    { name: 'Aarav', gender: 'Male', company: 'Swimlane', age: '13' },
    { name: 'Shahrukh', gender: 'Male', company: 'CTS', age: '40' },
    { name: 'Salman', gender: 'Male', company: 'c++', age: '39' },
    { name: 'Kat', gender: 'female', company: 'smartdata', age: '23' },
    { name: 'Aarav', gender: 'Male', company: 'Swimlane', age: '13' },
  ];
  constructor() { }

  ngOnInit() {
  }

  paginate(event) {
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    console.log('hello pagiante !!!');
  }
  update(dt) {
    dt.reset();
  }
}
