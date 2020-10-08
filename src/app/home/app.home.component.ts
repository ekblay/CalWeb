import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html'
})
export class AppHomeComponent {
  images = ['./assets/img/church.jpg', 'url(./assets/img/jump_dark.jpg)'];
  smsLinkWelcome = 'sms:+19022001070';
  smsLinkCalvary = 'sms:+19022001070';


  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  public constructor(private titleService: Title, private sanitizer: DomSanitizer) {
    titleService.setTitle('Home - Calvary Church');
  }
}


