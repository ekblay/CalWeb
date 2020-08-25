import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';

import { AppHomeComponent } from './home/app.home.component';


// Navigation bar and footer have to be in the module so
// that it is accessible to all templates and components

// Navigation
@Component({
  selector: 'app-nav-template',
  templateUrl: './templates/navBar.html'
})

export  class NavigationComponent {
  logoImage = './assets/img/logo.jpg';
}


// Footer
@Component({
  selector: 'app-footer-template',
  templateUrl: './templates/footer.html'
})

export class FooterComponent {}

@NgModule({
  declarations: [AppHomeComponent, NavigationComponent, FooterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppHomeComponent],
})
export class AppModule {}
