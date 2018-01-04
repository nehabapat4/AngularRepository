import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodListPage } from '../food-list/food-list';
import { FoodServiceProvider } from '../../providers/food-service/food-service';
/**
 * Generated class for the CalorieMeterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calorie-meter',
  templateUrl: 'calorie-meter.html',
})
export class CalorieMeterPage {
  foodOptions:string[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private foodServiceProvider:FoodServiceProvider) {
    this.foodOptions=['Maharashtrian','North Indian','South Indian'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalorieMeterPage');
  }
  selectedFoodType(foodType){
    console.log("selected food type ",foodType);
    this.foodServiceProvider.setFoodType(foodType);
    this.navCtrl.push(FoodListPage);
  }
}
