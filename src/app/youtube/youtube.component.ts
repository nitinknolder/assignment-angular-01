import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../home/home.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
  url: string;
  videoLink: SafeUrl;
  constructor(private router: ActivatedRoute, public sanitizer: DomSanitizer) {
    this.photoURL();
  }
  ngOnInit() {
  }
  photoURL() {
    this.url = 'https://www.youtube.com/embed/' + this.router.snapshot.params['id'];
    this.videoLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
//   constructor(private router: ActivatedRoute, private homeService: HomeService) {
//   }
//
//   data = [];
//   url: string;
//
//   ngOnInit() {
//     this.checkVideo();
//     console.log(this.router.snapshot.params['id']);
//   }
//
//   checkVideo() {
//     console.log('started');
//     this.homeService.getData().subscribe(
//       (data: any) => {
//         this.data = data.items;
//         console.log(this.data);
//       },
//       (err) => {
//         this.data = err;
//         console.log('error' + err);
//       },
//       () => {
//         console.log('end');
//       });
//   }
// }
