import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data = [];
  constructor(private service: HomeService, private router: Router) {

  }

  ngOnInit() {
    this.getDataFromService();
  }
  getDataFromService() {
    this.service.getData().subscribe((data: any) => {
        this.data = data.items;
        console.log(data.items);
        // this.router.navigate(['home']);
      } ,
      err => {
        console.log('Error Occurred');
      },
      () => {
        console.log('complete');
      }
    );
  }
}

