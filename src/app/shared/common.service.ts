import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  user() {
    console.log('hello i am common service')
  }

  helloBook() {
    console.log('hello book ')
  }

}


