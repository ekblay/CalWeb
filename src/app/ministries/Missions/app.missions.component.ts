import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './app.missions.component.html'
})
export class AppMissionsComponent {
  public constructor(private titleService: Title) {
    titleService.setTitle('Missions and Outreach');
  }
  image =  ['url(assets/img/outreach.jpg)', 'url(assets/img/overcomers.jpg)', 'url(assets/img/international.jpg)'];
}
