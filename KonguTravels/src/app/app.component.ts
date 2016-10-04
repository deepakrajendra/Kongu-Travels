import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import {UserData} from '../providers/user-data';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main-page/main-page';
import { RideDetailsPage } from '../pages/ride-details-page/ride-details-page';
import {MapPage} from '../pages/map-page/map-page';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage ;
  constructor(platform: Platform, public userData:UserData) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
 
 this.userData.getLogin().then((hasLoggedIn) => {
   if(hasLoggedIn=='yes')
   this.rootPage=MainPage;
   else
   this.rootPage=HomePage;
 });
}
}
