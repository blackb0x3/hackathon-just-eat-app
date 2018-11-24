import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, AlertController, ToastOptions, AlertOptions, ModalOptions, ModalController } from 'ionic-angular';

/*
  Generated class for the UtilityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilityProvider {

  defaultConfirmOpts: AlertOptions = {};

  constructor(
    public http: HttpClient,
    public toasts: ToastController,
    public alerts: AlertController,
    public modals: ModalController
  ) {
    console.log('Hello UtilityProvider Provider');
  }

  public showToast(opts: ToastOptions) {
    this.toasts.create(opts).present();
  }

  public showAlert(opts: AlertOptions) {
    this.alerts.create(opts).present();
  }

  public showConfirm(customOpts: AlertOptions) {
    let theOpts: AlertOptions = Object.assign(this.defaultConfirmOpts, customOpts);
    this.alerts.create(theOpts).present();
  }

  public showModal(opts: ModalOptions) {
    this.modals.create(opts).present();
  }
}
