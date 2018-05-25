import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit {
  bsValue = new Date();
  minDate = new Date();
  constructor() { }

  ngOnInit() {

  }

}
