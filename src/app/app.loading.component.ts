import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './app.loading.component.html'
})
export class AppLoadingComponent {
  images = ['./assets/img/underconstruction.png'];

  public constructor(private titleService: Title) {
    titleService.setTitle('Page is loading');
  }
}


