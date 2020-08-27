import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-ministries',
  templateUrl: './app.ministries.component.html'
})
export class AppMinistriesComponent {
  public constructor(private titleService: Title) {
    titleService.setTitle('Ministries');
  }
}


