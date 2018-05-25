import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  car = [
    { vehicle: "car", color: "red", available: 2, price: 200 },
    { vehicle: "bike", color: "blue", available: 5, price: 600 },
    { vehicle: "cycle", color: "green", available: 9, price: 400 },
  ];

  constructor() { }

  ngOnInit() {
  }




}
