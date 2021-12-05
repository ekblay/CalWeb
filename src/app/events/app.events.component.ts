import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './app.events.component.html'
})
export class AppEventsComponent {
  public constructor(private titleService: Title) {
    titleService.setTitle('Events');
  }
  image = '/assets/img/decCal.png';

}
