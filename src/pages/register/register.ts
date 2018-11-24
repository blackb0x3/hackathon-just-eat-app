import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HackathonApiProvider } from '../../providers/hackathon-api/hackathon-api';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public showPass: boolean = false;
  public type: string = "password";
  public registerForm: FormGroup;
  public regAsBusiness: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public hackathonApi: HackathonApiProvider
  ) {
    this.regAsBusiness
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      homeAddress: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      profilePicture: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  showPassword() {
    this.showPass = !this.showPass;
    this.type = this.showPass ? "text" : "password";
  }

  register() {
    //console.log(this.registerForm.value);
    this.registerForm.value['isBusiness'] = this.regAsBusiness === 'true';

    this.hackathonApi.register(this.registerForm.value)
      .catch(this.hackathonApi.handleError)
      .subscribe((resp) => {
        if (!resp['success']) {
          // show error
        } else {
          // set account page as root page on stack
        }
      });
  }
}
