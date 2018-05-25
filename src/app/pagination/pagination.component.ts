import { Component, OnInit } from '@angular/core';
// import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  totalItems = 164;
  currentPage = 10;
  // @BlockUI() blockUI: NgBlockUI;

  constructor() { }

  ngOnInit() {
  }

  setPage(pageNo: number): void {
    this.currentPage = pageNo;

  }

}
