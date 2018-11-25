import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import allergies from '../../mocks/allergies/allergies';

/**
 * Generated class for the FoodRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-request',
  templateUrl: 'food-request.html',
})
export class FoodRequestPage {

  commonAllergies: string[] = allergies;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodRequestPage');
  }
  
  ionViewWillLoad() {

  }

}
