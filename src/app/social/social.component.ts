import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
    sharePage(url, width, height) {
    url = url.replace('##link##', window.location.href);
    let leftPosition, topPosition, newwindow;
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    newwindow = window.open(url, 'name',
      'status=no,height=' + height + ',width=' + width + ',resizable=yes,left='
      + leftPosition + ',top=' + topPosition + ',screenX=' + leftPosition + ',screenY='
      + topPosition + ',toolbar=no,menubar=no,scrollbars=no,location=no,directories=no');
    if (window.focus) {
      newwindow.focus();
    }
    return false;
  }
}
