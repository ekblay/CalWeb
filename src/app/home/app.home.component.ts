import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html'
})
export class AppHomeComponent {
  images = ['./assets/img/church.jpg', './assets/img/flags1.jpg', './assets/img/pastor1.jpg'];

  public constructor(private titleService: Title) {
    titleService.setTitle('Home - Calvary Church');
  }
}


