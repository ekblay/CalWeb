import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html'
})
export class AppHomeComponent {
  images = ['./assets/img/church.jpg', './assets/img/rememberanceDay.jpg', './assets/img/palmSunday.jpg',
  'url(./assets/img/jump.jpg)'];

  public constructor(private titleService: Title) {
    titleService.setTitle('Home - Calvary Church');
  }
}


