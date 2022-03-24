import {BrowserModule, Title} from '@angular/platform-browser';
import {Component, NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './home/app.home.component';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer'; // <-- Import PdfJsViewerModule module

import {
  AppFamilyComponent, AppMediaComponent, AppMinistriesComponent, AppMissionIntroComponent, AppPrayerComponent,
  AppYoungAdultsComponent,
  AppYouthComponent
} from './ministries/app.ministries.component';
import {AppOurBeliefsComponent} from './about-us/app.aboutUs.component';
import {AppMissionsComponent} from './ministries/Missions/app.missions.component';
import {AppEventsComponent} from './events/app.events.component';
import {AppCovid19Component} from './covid/app.covid_19.component';
import {AppUkraineComponent} from './ukraine/app.ukraine.component';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppInitComponent {
}

// Navigation bar and footer have to be in the module so
// that it is accessible to all templates and components

// Navigation
@Component({
  selector: 'app-nav-template',
  templateUrl: './templates/navBar.html'
})

export class NavigationComponent {
  logoImage = './assets/img/logo.jpg';
}


// Footer
@Component({
  selector: 'app-footer-template',
  templateUrl: './templates/footer.html'
})

export class FooterComponent {}



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AppHomeComponent},
  {path: 'ministries', component: AppMinistriesComponent},
  {path: 'our-beliefs', component: AppOurBeliefsComponent},
  {path: 'ministries/missions-outreach', component: AppMissionsComponent},
  {path: 'events', component: AppEventsComponent},
  {path: 'covid-19-update', component: AppCovid19Component},
  {path: 'support-ukraine', component: AppUkraineComponent}
];

@NgModule({
  declarations: [AppInitComponent,
    AppUkraineComponent,
    AppHomeComponent,
    AppMinistriesComponent,
    AppOurBeliefsComponent,
    AppFamilyComponent,
    AppYouthComponent,
    AppYoungAdultsComponent,
    AppMediaComponent,
    AppPrayerComponent,
    AppMissionIntroComponent,
    AppMissionsComponent,
    AppEventsComponent,
    NavigationComponent,
    FooterComponent,
    AppCovid19Component
  ],
  imports: [BrowserModule,  PdfJsViewerModule, RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  providers: [Title],
  bootstrap: [AppInitComponent],
  exports: [RouterModule]
})
export class AppModule {
}

