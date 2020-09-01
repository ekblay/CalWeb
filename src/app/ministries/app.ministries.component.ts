import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';



@Component({
  selector: 'app-family',
  templateUrl: './app.ministries.component.html'
})
export class AppFamilyComponent {
  public constructor(private titleService: Title) {
    titleService.setTitle('Ministries - Family');
  }
}
@Component({
  selector: 'app-youth',
  templateUrl: './app.youth.component.html'
})
export class AppYouthComponent {
  escapeImage = ['./assets/img/escape.png'];
  public constructor(private titleService: Title) {
    titleService.setTitle('Ministries - Youth');
  }
}

@Component({
  selector: 'app-young-adults',
  templateUrl: './app.youngAdults.component.html'
})
export class AppYoungAdultsComponent {
  yaImage = ['./assets/img/ya.png'];
  public constructor(private titleService: Title) {
    titleService.setTitle('Ministries - Young Adults');
  }
}

@Component({
  selector: 'app-adults',
  templateUrl: './app.adults.component.html'
})
export class AppAdultsComponent {
  public constructor(private titleService: Title) {
    titleService.setTitle('Ministries - Adults');
  }
}


@Component({
  selector: 'app-missions',
  templateUrl: './app.missions.component.html'
})
export class AppMissionsComponent {
  public constructor(private titleService: Title) {
    titleService.setTitle('Ministries - Missions');
  }
}

