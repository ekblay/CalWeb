import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
 selector: 'app-ministry',
  templateUrl: './app.ministries.component.html'
})
export class AppMinistriesComponent {
  getUrl() {
    return 'url(assets/img/ministry.jpg)';
  }
  public constructor(private titleService: Title) {
    titleService.setTitle('Ministries');
  }
}

@Component({
  selector: 'app-family',
  templateUrl: './app.family.component.html'
})
export class AppFamilyComponent {
  getUrl() {
    return 'url(./assets/img/family.jpg)';
  }
}

@Component({
  selector: 'app-youth',
  templateUrl: './app.youth.component.html'
})
export class AppYouthComponent {
  getUrl() {
    return 'url(./assets/img/hsmin.jpg)';
  }
}

@Component({
  selector: 'app-young-adults',
  templateUrl: './app.youngAdults.component.html'
})
export class AppYoungAdultsComponent {
getUrl() {
  return'url(./assets/img/people.jpg)';
}
}

@Component({
  selector: 'app-adults',
  templateUrl: './app.adults.component.html'
})
export class AppAdultsComponent {}


@Component({
  selector: 'app-mission-intro',
  templateUrl: './app.missionIntro.component.html'
})
export class AppMissionIntroComponent {
  getUrl() {
    return 'url(./assets/img/mission.jpg)';
  }
}

@Component({
  selector: 'app-media',
  templateUrl: './app.media.component.html'
})
export class AppMediaComponent {
  getUrl() {
    return 'url(./assets/img/media.jpg)';
  }
}

