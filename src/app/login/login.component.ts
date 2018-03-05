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
  @Output() submitName = new EventEmitter();
  user: Login = new Login('' , '' );

  constructor(private router: Router) {
    this.email = '';
    this.password = '';
  }
  // submit(){
  //   this.router.navigateByUrl('home');
  // }
  ngOnInit() { }
  submitForm() {
     this.router.navigate(['/home']);
    console.log(this.user);
  }

}
