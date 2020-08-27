import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-service',
  templateUrl: './app.services.component.html'
})
export class AppServicesComponent {
  public constructor(private titleService: Title) {
    titleService.setTitle('Services');
  }
}


