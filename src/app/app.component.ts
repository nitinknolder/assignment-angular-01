import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LOGIN FORM';
  public email: string;
  public password: string;

  ngOnInit() {
    alert('Enter Your Credentials');
  }

  constructor(private router: Router) {
  this.email = '';
  this.password = '';
  }
  // public submit(): void {
  //   this.router.navigateByUrl('src/app/home/home.component.html');
  // }
}

