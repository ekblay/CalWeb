import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './app.ukraine.component.html'
})
export class AppUkraineComponent {
  pdfSrc = './stand_with_ukraine.pdf';


  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  public constructor(private titleService: Title, private sanitizer: DomSanitizer) {
    titleService.setTitle('Support Ukraine - Calvary Church');
  }
}


