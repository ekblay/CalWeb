import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './app.aboutUs.component.html'
})
export class AppAboutUsComponent {
  public constructor(private titleService: Title) {
    titleService.setTitle('About Us');
  }
  pngImage = '/assets/img/paoc.png';
  getUrl() {
    return 'url(assets/img/believe.jpg)';
  }
}
