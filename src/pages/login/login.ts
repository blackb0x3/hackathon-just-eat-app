import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FoodPage } from '../food/food';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  formgroup:FormGroup;


  username:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
  
    this.navCtrl.push(FoodPage);
    console.log("Username: " + this.username);
    console.log("Password: " + this.password);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }
}
