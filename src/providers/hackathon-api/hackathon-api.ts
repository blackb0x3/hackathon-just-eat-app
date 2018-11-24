import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

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

  private defaultHeaders: any = {
    accept: "application/json"
  };

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

  register(registrationVals: any) { 
    return this.http.post(this.url + this.endpoints['userRegister'], registrationVals, this.defaultHeaders);
  }

  userLogin() {

  }

  userRequest() {

  }

  businessLogin() {

  }

  businessRequest() {

  }

  handleError(err: any) {
    this.logResponse(err);
    return Observable.throw(err);
  }

  logResponse(resp: any) {
    console.group(`HTTP RESPONSE ${resp.status}`);
    console.log(resp);
    console.groupEnd();
  }
}
