import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';
/*

  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {
  rides=[];
HAS_LOGGEDIN='hasLoggedIn';
  constructor(public http: Http, public storage:Storage) {
    console.log('Hello UserData Provider');
  }

setLogin( userName, password)
{
this.storage.set('userName',userName);
this.storage.set('password',password);
this.storage.set(this.HAS_LOGGEDIN,'yes');
}

getLogin()
{
return this.storage.get('hasLoggedIn').then(data=>
{
  return data;
});
}

getRides()
{
 return this.http.get('http://localhost:3000/rides').map(res=>res.json());
}

logOut()
{
  this.storage.remove('userName');
  this.storage.remove('password');
  this.storage.remove('hasLoggedIn');
  this.storage.set('hasLoggedIn','no');
}
}