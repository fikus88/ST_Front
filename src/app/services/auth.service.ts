import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { Sensitive } from '../../../Sensitive'

import 'rxjs/add/operator/filter';

// Avoid name not found warnings
let Auth0Lock: any = require('auth0-lock').default;
let _Sens: Sensitive = new Sensitive();
@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock(_Sens.Auth0Key, _Sens.Auth0Url, {});

  constructor(private router: Router) {


    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('profile', JSON.stringify(authResult.profile));

  this.lock.getProfile(authResult.idToken, (error:any, profile:any ) => {
        if (error) {
          console.log(error);
        }

        localStorage.setItem('profile', JSON.stringify(profile));
    this.router.navigateByUrl('/main');
      });

    //  this.lock.hide();

    });
  }

  public login() {
    // Call the show method to display the widget.
    if (localStorage.getItem('id_token') != null) {
      return this.logout()
    }else {
      return this.lock.show();
    }
  }

  public loggedIn() {

    if (localStorage.getItem('id_token') != null) {
      return true;
    } else {
      return false;
    }

  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }
}
