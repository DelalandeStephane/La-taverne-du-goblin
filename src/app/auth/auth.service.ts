import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Monster } from '../models/monster.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authData : any;
  private isLoggedIn: Boolean;
  constructor(private http : HttpClient, private router : Router) {  
    this.isLoggedIn = false;
  }

  public isLogged (auth :any) {
    this.isLoggedIn = true;
    this.authData = auth;
    sessionStorage.setItem('is-logged-in', String(this.isLoggedIn));
    sessionStorage.setItem('auth-token', this.authData.token);
    sessionStorage.setItem('auth-id', this.authData.userId);
  }
  public  signUp(monster: Monster ) {

    monster.createdAt = new Date();
     return this.http
       .post< Monster >(`${environment.baseUrl}/auth/sign-up`,monster);
   }

   public  signIn(loginData: any) {

    return this.http
      .post< any >(`${environment.baseUrl}/auth/sign-in`,loginData
      );
  }

  public getLogged(){
    return this.isLogged;
  }

  public getAuthData(){
    return this.authData;
  }

  public logout () {
    sessionStorage.removeItem('is-logged-in');
    sessionStorage.removeItem('auth-token');
    sessionStorage.removeItem('auth-id');
    this.router.navigateByUrl('/')
  }

  public verifyEmail(email: string) {
    return this.http.get<any>(`${environment.baseUrl}/auth/verify-email/${email}`);
  }


}
