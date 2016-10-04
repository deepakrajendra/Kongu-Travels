import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {Geolocation} from 'ionic-native';

/*
  Generated class for the MapPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map-page',
  templateUrl: 'map-page.html'
})
export class MapPage {
lat;
lon;
  constructor(public navCtrl: NavController,public navParams:NavParams) {}

  ionViewDidLoad() {
  
  }

  getCurrentLocation()
  {
Geolocation.getCurrentPosition().then(pos=>
    {
      this.lat=pos.coords.latitude;
      this.lon=pos.coords.longitude;
console.log(pos.coords.latitude);
    });
  }

}
