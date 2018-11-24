import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Account } from '../../models/account';
import { HackathonApiProvider } from '../../providers/hackathon-api/hackathon-api';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  public userId: string;
  public accountDetails: Account;

  public showOldPass: boolean;
  public showNewPass: boolean;
  public showConfirmPass: boolean;

  public oldPasswordType: string;
  public newPasswordType: string;
  public confirmPasswordType: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public hackathonApi: HackathonApiProvider,
    public ns: NativeStorage
  ) {
  }

  ionViewWillEnter() {
    this.ns.getItem('userId')
      .catch((err) => {
        console.log(err);
      })
      .then((resp) => {
        this.userId = resp;
        this.hackathonApi.getAccountDetails(resp)
          .catch(this.hackathonApi.handleError)
          .subscribe((resp) => {
            this.accountDetails = resp;
          });
      });
  }

  showOldPassword() {
    this.showOldPass = !this.showOldPass;
    this.oldPasswordType = this.showOldPass ? "text" : "password";
  }

  showNewPassword() {
    this.showNewPass = !this.showNewPass;
    this.newPasswordType = this.showNewPass ? "text" : "password";
  }

  showConfirmPassword() {
    this.showConfirmPass = !this.showConfirmPass;
    this.confirmPasswordType = this.showConfirmPass ? "text" : "password";
  }

  updateAccountDetails() {
    this.hackathonApi.updateAccountDetails(this.userId, this.accountDetails);
  }
}
