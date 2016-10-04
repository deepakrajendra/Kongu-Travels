import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserData} from '../../providers/user-data';
import {RideDetailsPage} from '../ride-details-page/ride-details-page';
import{HomePage} from '../home/home';
/*
  Generated class for the MainPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main-page',
  templateUrl: 'main-page.html'
})
export class MainPage {
rides=[];
  constructor(public navCtrl: NavController, public userData:UserData) {}

  ionViewDidLoad() {
  this.userData.getRides().subscribe(data=>
  {
this.rides=data;    
  });
  }

  rideDetails(ride)
  {
    this.navCtrl.push(RideDetailsPage,{ride:ride});
  }

  logOut()
  {
this.userData.logOut(); 
this.navCtrl.push(HomePage);   
  }

}
