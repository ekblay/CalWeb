import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';


// Covid modal
@Component({
  selector: 'app-covid-19-modal',
  templateUrl: './app.covid_19.component.html'
})
export class AppCovid19Component {
  public constructor(private titleService: Title) {
    titleService.setTitle('Ministries');
  }
}
