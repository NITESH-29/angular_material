import { Component, OnInit } from '@angular/core';
// import '../assets/login-animation.js';
import '../../../assets/login-animation.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    (window as any).initialize();
  }

  login() {
    console.log(`email: ${this.email} password: ${this.password}`);
    localStorage.setItem('email', this.email)
    this.router.navigate(['/table'])
  }


  ngOnInit() {
  }

}
