import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class FoodItems{
  //foodItemId:number;
  foodItemName:string;
  foodItemQuantity:any;

  constructor(foodItemName:string,foodItemQuantity:any){
    this.foodItemName=foodItemName;
    this.foodItemQuantity=foodItemQuantity;
  }
}
/*
  Generated class for the FoodServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodServiceProvider {
  foodItems:FoodItems[];
  foodType:string;
  constructor(public http: HttpClient) {
    console.log('Hello FoodServiceProvider Provider');
  }

  public addFoodItem(foodItem){
    this.foodItems.push(foodItem);
  }

  public getFoodItems(){
    return this.foodItems;
  }

  public setFoodType(foodType){
    this.foodType=foodType;
  }
  public getFoodType(){
    return this.foodType;
  }
}
