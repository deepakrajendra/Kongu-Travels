import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
import { NavController } from 'ionic-angular';
import { MainPage } from '../main-page/main-page';
import {UserData} from '../../providers/user-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
userName:string;
    password:string;
    log;

  constructor(public navCtrl: NavController,public userData:UserData, public formBuilder:FormBuilder) { }

  ionViewDidLoad()
  {
     this.log = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['',Validators.required],
    });
  }

  login()
  {
    console.log(this.log.value.userName+" "+this.log.value.password);
    this.userData.setLogin(this.log.value.userName,this.log.value.password);

  
this.navCtrl.push(MainPage);
  }
}
