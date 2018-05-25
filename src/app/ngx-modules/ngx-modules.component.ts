import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-ngx-modules',
  templateUrl: './ngx-modules.component.html',
  styleUrls: ['./ngx-modules.component.css']
})
export class NgxModulesComponent implements OnInit {

  // content = 'Nitesh Bajpayee';
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(NgxModulesComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}

