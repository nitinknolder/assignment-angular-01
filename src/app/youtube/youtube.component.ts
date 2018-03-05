import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../home/home.service';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  constructor(private router: ActivatedRoute, private homeService: HomeService) {
  }

  data = [];
  url: string;

  ngOnInit() {
    this.checkVideo();
    console.log(this.router.snapshot.params['id']);
  }

  checkVideo() {
    console.log('started');
    this.homeService.getData().subscribe(
      (data: any) => {
        this.data = data.items;
        console.log(this.data);
      },
      (err) => {
        this.data = err;
        console.log('error' + err);
      },
      () => {
        console.log('end');
      });
  }
}
