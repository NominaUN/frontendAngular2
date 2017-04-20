import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, SignInData } from 'angular2-token';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class LoginComponent implements OnInit {


      signInData: SignInData = <SignInData>{};
      output: any;

     constructor(private _tokenService: Angular2TokenService) {
this._tokenService.init(environment.token_auth_config)
     }



  ngOnInit() {
  }

      onSubmit() {

        this.output = null;

        this._tokenService.signIn(this.signInData).subscribe(
            res => {
                this.signInData     = <SignInData>{};
                this.output         = res;
            }, error => {
                this.signInData     = <SignInData>{};
                this.output         = error;
            }
        );
    }

      signUp(){
        this._tokenService.registerAccount({
        email:                'admin@admin.com',
        password:             '12345678',
        passwordConfirmation: '12345678'})
        .subscribe(
        res =>      console.log(res),
          error =>    console.log(error));
      }

}
