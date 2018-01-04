import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalorieMeterPage } from './calorie-meter';

@NgModule({
  declarations: [
    CalorieMeterPage,
  ],
  imports: [
    IonicPageModule.forChild(CalorieMeterPage),
  ],
})
export class CalorieMeterPageModule {}
