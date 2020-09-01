import {BrowserModule, Title} from '@angular/platform-browser';
import {Component, NgModule, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './home/app.home.component';
import {AppServicesComponent} from './services/app.services.component';
import {
  AppAdultsComponent,
  AppFamilyComponent,
  AppMissionsComponent,
  AppYoungAdultsComponent,
  AppYouthComponent
} from './ministries/app.ministries.component';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppInitComponent {}

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



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AppHomeComponent},
  {path: 'ministries-family', component: AppFamilyComponent},
  {path: 'ministries-youth', component: AppYouthComponent},
  {path: 'ministries-young-adults', component: AppYoungAdultsComponent},
  {path: 'ministries-adults', component: AppAdultsComponent},
  {path: 'ministries-missions', component: AppMissionsComponent},
  {path: 'services', component: AppServicesComponent}
  ];

@NgModule({
  declarations: [AppInitComponent,
    AppHomeComponent,
    AppFamilyComponent,
    AppYouthComponent,
    AppYoungAdultsComponent,
    AppAdultsComponent,
    AppMissionsComponent,
    AppServicesComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [Title],
  bootstrap: [AppInitComponent],
  exports: [RouterModule]
})
export class AppModule {}

