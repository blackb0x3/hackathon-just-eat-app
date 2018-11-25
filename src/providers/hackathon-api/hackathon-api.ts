import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Account } from '../../models/account';
import { AccountPage } from '../../pages/account/account';

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

  private url: string = '/'; // TODO
  // ENDPOINTS
  private endpoints: any = {
    'register': '',
    'login': '',
    'foodRequest': '',
    'accountDetails': '',
    'updateAccountDetails': ''
  };
  // *END OF* ENDPOINTS

  register(registrationVals: any) { 
    return this.http.post(this.url + this.endpoints['userRegister'], registrationVals, this.defaultHeaders);
  }

  login(username: string, password: string) {
    return this.http.post(this.url + this.endpoints['login'], {user: username, pass: password}, this.defaultHeaders);
  }

  request(foodRequestVals: any) {
    return this.http.post(this.url + this.endpoints['foodRequest'], foodRequestVals, this.defaultHeaders);
  }

  getAccountDetails(userId: string): Observable<Account> {
    let resp: Observable<Account> = this.http.get(this.url + this.endpoints['accountDetails'] + '?id=' + userId)
      .map((account: Account) => {
        return account;
      });

    return resp;
  }

  updateAccountDetails(userId: string, accountInfo: Account) {
    return this.http.post(this.url + this.endpoints['updateAccountDetails'], {
      id: userId,
      newIndo: accountInfo
    }, this.defaultHeaders);
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
