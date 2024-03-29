import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username = '';
  showMenuToggleButton=true;
  constructor(public navCtrl: NavController, private auth: AuthServiceProvider) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
  }
  hideMenuToggleButton(){
    this.showMenuToggleButton=false;
  }
}
