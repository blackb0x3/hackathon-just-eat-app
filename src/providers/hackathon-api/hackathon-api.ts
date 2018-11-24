import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';

/*
  Generated class for the HackathonApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HackathonApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HackathonApiProvider Provider');
  }

  private url: string = ''; // TODO
  // ENDPOINTS
  private endpoints: any = {
    'businessRegister': '',
    'businessLogin': '',
    'businessRequest': '',
    'userRegister': '',
    'userLogin': '',
    'userRequest': '',
  };
  // *END OF* ENDPOINTS

  userRegister() {

  }

  userLogin() {

  }

  userRequest() {

  }

  businessRegister() {

  }

  businessLogin() {

  }

  businessRequest() {

  }
}
