import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodRequestPage } from './food-request';

@NgModule({
  declarations: [
    FoodRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodRequestPage),
  ],
})
export class FoodRequestPageModule {}
