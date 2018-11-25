import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, AlertController, ToastOptions, AlertOptions, ModalOptions, ModalController, LoadingOptions, LoadingController } from 'ionic-angular';

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
    public modals: ModalController,
    public loading: LoadingController
  ) {
    console.log('Hello UtilityProvider Provider');
  }

  public showToast(opts: ToastOptions) {
    return this.toasts.create(opts).present();
  }

  public showAlert(opts: AlertOptions) {
    return this.alerts.create(opts).present();
  }

  public showConfirm(customOpts: AlertOptions) {
    let theOpts: AlertOptions = Object.assign(this.defaultConfirmOpts, customOpts);
    return this.alerts.create(theOpts).present();
  }

  public showModal(opts: ModalOptions) {
    return this.modals.create(opts).present();
  }

  public showLoadingPopup(opts: LoadingOptions) {
    return this.loading.create(opts).present();
  }
}
