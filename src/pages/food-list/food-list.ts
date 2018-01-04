import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FoodServiceProvider, FoodItems } from '../../providers/food-service/food-service';

/**
 * Generated class for the FoodListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-list',
  templateUrl: 'food-list.html',
})
export class FoodListPage {
  foodType:string;
  displayFoodItemsList:FoodItems[];
  maharashtrianFoodItemsList:FoodItems[];
  northIndianFoodItemsList:FoodItems[];
  southIndianFoodItemsList:FoodItems[];
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private foodServiceProvider:FoodServiceProvider,private alertCtrl:AlertController) {
    this.maharashtrianFoodItemsList=[
      {foodItemName:'Chapati',foodItemQuantity:0},
      {foodItemName:'Bhaji (no of bowls)',foodItemQuantity:0},
      {foodItemName:'Pohe (no of bowls)',foodItemQuantity:0}
    ];
    this.northIndianFoodItemsList=[
      {foodItemName:'Wheat Roti Plane',foodItemQuantity:0},
      {foodItemName:'Butter Wheat Roti',foodItemQuantity:0},
      {foodItemName:'Sabji (no of bowls)',foodItemQuantity:0}
    ];
    this.southIndianFoodItemsList=[
      {foodItemName:'Idli',foodItemQuantity:0},
      {foodItemName:'Dosa',foodItemQuantity:0},
      {foodItemName:'Uttappa',foodItemQuantity:0},
      {foodItemName:'Sambar (no of bowls)',foodItemQuantity:0}
    ];
  }

  ionViewDidLoad() {
    this.foodType=this.foodServiceProvider.getFoodType();
    console.log('ionViewDidLoad FoodListPage,getting food type ',this.foodType);
    if(this.foodType=='Maharashtrian'){
      this.displayFoodItemsList=this.maharashtrianFoodItemsList;
    }else if(this.foodType=='North Indian'){
      this.displayFoodItemsList=this.northIndianFoodItemsList;
    }else if(this.foodType=='South Indian'){
      this.displayFoodItemsList=this.southIndianFoodItemsList;
    }
  }

  incrementQty(index){
    console.log("index is ",index);
    this.displayFoodItemsList[index].foodItemQuantity++;
  }
  decrementQty(index){
    if(this.displayFoodItemsList[index].foodItemQuantity==0){
      let alert = this.alertCtrl.create({
        title: 'Cannot go in negative numbers!',
        buttons: ['OK']
      });
      alert.present();
  
    }else{
      this.displayFoodItemsList[index].foodItemQuantity--;
    }
    
  }

}
