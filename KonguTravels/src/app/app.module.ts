import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main-page/main-page';
import {UserData} from '../providers/user-data';
import {Storage} from '@ionic/storage';
import {RideDetailsPage } from '../pages/ride-details-page/ride-details-page';
import {MapPage} from'../pages/map-page/map-page';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    RideDetailsPage,
    MapPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    RideDetailsPage,
    MapPage
  ],
  providers: [UserData,Storage]
})
export class AppModule {}
