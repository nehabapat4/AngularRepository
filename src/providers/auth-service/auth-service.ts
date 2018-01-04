import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

export class User {
  name: string;
  email: string;
  password:string;
 
  constructor(name: string, email: string,password:string) {
    this.name = name;
    this.email = email;
    this.password=password;
  }
}
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  currentUser: User;
  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Neha', 'neha@gmail.com','pass');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
