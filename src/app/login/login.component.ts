import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Login} from './login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() email: string;
  password: string;
  user: Login = new Login('' , '' );

  constructor(private router: Router) {
    this.email = '';
    this.password = '';
  }

  ngOnInit() { }
  submitForm() {
     this.router.navigate(['/login/home']);
    console.log(this.user);
  }

  navigateTo() {

  }
}
