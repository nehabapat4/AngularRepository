import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalorieMeterPage } from '../pages/calorie-meter/calorie-meter';
import { FoodListPage } from '../pages/food-list/food-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { FoodServiceProvider } from '../providers/food-service/food-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CalorieMeterPage,
    FoodListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CalorieMeterPage,
    FoodListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    FoodServiceProvider
  ]
})
export class AppModule {}
