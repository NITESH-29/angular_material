import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {

  @Output() onClick: EventEmitter<any> = new EventEmitter
  // @Output() onFilter: EventEmitter = new EventEmitter();

  constructor(
    public common: CommonService
  ) { }

  totalItems = 100;
  currentPage = 5;
  cols = [{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }, { name: 'Age' }, { name: 'profession' }];
  data = [];
  filteredData = [];
  pageSize: 10;
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane', age: '30', profession: 'Software' },
    { name: 'Dany', gender: 'Male', company: 'KFC', age: '35', profession: 'Teacher' },
    { name: 'Molly', gender: 'Female', company: 'Burger King', age: '25', profession: 'Doc.' },
    { name: 'Nitesh', gender: 'Male', company: 'smartdata', age: '26', profession: 'Laywer' },
    { name: 'Kapil', gender: 'Male', company: 'smartdata', age: '30', profession: 'Student' },
    { name: 'Suresh', gender: 'Male', company: 'Accenture', age: '10', profession: 'N/A' },
    { name: 'Raaj', gender: 'Male', company: 'TCS', age: '70', profession: 'Actor' },
    { name: 'Shahrukh', gender: 'Male', company: 'CTS', age: '40', profession: 'Actor' },
    { name: 'Salman', gender: 'Male', company: 'c++', age: '39', profession: 'Business' },
    { name: 'Kat', gender: 'female', company: 'smartdata', age: '23', profession: 'Nurse' },
    { name: 'Aarav', gender: 'Male', company: 'Swimlane', age: '13', profession: 'Software' },
  ];
  // columns = [
  //   { prop: 'name' },
  //   { name: 'Gender' },
  //   { name: 'Company' }
  // ];
  ngOnInit() {
    // populate datatable rows
    this.data = this.rows;
    // copy over dataset to empty object
    this.filteredData = this.rows;
  }

  something() {
    alert('its working')
  }

  onSort(event) {
    console.log('Sort Event', event);
    const rows = [...this.rows];

    const sort = event.sorts[0];
    rows.sort((a, b) => {
      return a[sort.prop].localeCompare(b[sort.prop]) * (sort.dir === 'desc' ? -1 : 1);
    });

    this.rows = rows;
  }
  editUser() {
    alert('You Just edited the user !!')
  }

  deleteUser() {
    alert('You have deleted one user !!')
  }


  takeAction(value) {
    console.log(value, typeof value);
    if (value == '1') {
      console.log("Case 1")
    } else if (value == '2') {
      console.log("Case 1")
    } else {
      (value == '3')
      console.log("Case 1")
    }
  }

  filterDatatable(event) {
    let val = event.target.value.toLowerCase();
    let colsAmt = this.cols.length;
    let keys = Object.keys(this.rows[0]);
    this.data = this.filteredData.filter(function (item) {
      for (let i = 0; i < colsAmt; i++) {
        if (item[keys[i]].toLowerCase().indexOf(val) !== -1 || !val) {
          return true;
        }
      }
    });

  }


}
