import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router : Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.getLogged() && this.authService.getAuthData() ){
        return true
      }else if(sessionStorage.getItem('is-logged-in')&&
                sessionStorage.getItem('auth-token')&&
                sessionStorage.getItem('auth-id')
      ) {
        return true;
      }
      this.router.navigateByUrl('/')
      return false;
    }

}
