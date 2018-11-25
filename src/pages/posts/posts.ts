import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailedViewPage } from '../detailed-view/detailed-view';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

  pressed() {
    const alert = this.alertCtrl.create({
      title: 'Name!',
      subTitle: 'This person has .......',
      buttons: ['OK']
    });
    alert.present();
  }
}



