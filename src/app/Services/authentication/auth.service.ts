import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';
import { Response }   from '@angular/http';

import { Angular2TokenService } from 'angular2-token';
import { Observable }           from 'rxjs/Observable';
//import { environment } from '../../environments/environment'


@Injectable()
export class AuthService {
  redirectUrl: string;

  constructor(
    private tokenService: Angular2TokenService, 
    public router: Router) {
      //this.tokenService.init(environment.token_auth_config)
            this.tokenService.init({apiPath: 'http://localhost:3000'})


    }

  logIn(email: string, password: string): Observable<Response> {
    return this.tokenService.signIn({ email: email,
                                     password: password });
  }

  signUp(){

        this.tokenService.registerAccount({
        email:                'admin@admin.com',
        password:             '12345678',
        passwordConfirmation: '12345678'})
        .subscribe(
        res =>      console.log(res),
          error =>    console.log(error));
      }


  signInWithGithub(): Observable<any> {
    return this.tokenService.signInOAuth('github');
  }

  proccessOauthCallback(): void {
    this.tokenService.processOAuthCallback();
    this.redirectAfterLogin();
  }

  logOut(): void {
    this.redirectUrl = undefined;
    this.tokenService.signOut();
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.tokenService.userSignedIn();
  }

  redirectAfterLogin(): void {
    let redirectTo = this.redirectUrl ? this.redirectUrl : '/';
    this.redirectUrl = undefined;
    this.router.navigate([redirectTo]);
  }
}
