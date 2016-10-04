import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {MapPage} from '../map-page/map-page';
import {AlertController} from 'ionic-angular';
/*
  Generated class for the RideDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ride-details-page',
  templateUrl: 'ride-details-page.html'
})
export class RideDetailsPage {
ride;
  constructor(public navCtrl: NavController,public navParams:NavParams, public alertController:AlertController) {}

  ionViewDidLoad() {
    console.log('Hello RideDetailsPage Page');
    this.ride=this.navParams.get('ride');
  }

start()
{
this.navCtrl.push(MapPage,{ride:this.ride});  
}

cancel(){

  let alrt=this.alertController.create(
    {
      title:'Cancel the trip?',
      message:'Are you sure to cancel the ride?',
      buttons:[
        {
text:'Yes',
handler:()=>{console.log('yes clicked');}

        },
        {
text:'No',
handler:()=>console.log('no clicked')

        }
      ]
    }
  );
  alrt.present();
}
}
