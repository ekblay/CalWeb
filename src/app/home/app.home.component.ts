import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html'
})
export class AppHomeComponent {
  images = ['./assets/img/church.jpg', 'url(./assets/img/jump_dark.jpg)'];

  public constructor(private titleService: Title) {
    titleService.setTitle('Home - Calvary Church');
  }
}


