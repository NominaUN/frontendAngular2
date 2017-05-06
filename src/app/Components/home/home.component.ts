import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, SignInData } from 'angular2-token';
import {environment} from "../../../environments/environment";
import { Router } from "@angular/router";
import  { AuthService } from '../../Services/authentication/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

        submitted: boolean;

      signInData: SignInData = <SignInData>{};
      output: any;

     constructor(
                private _tokenService: Angular2TokenService, 
                private router:Router,
                    private authService: AuthService) {
            this._tokenService.init(environment.token_auth_config)
     }
    




  ngOnInit() {}



  

      onSubmit() {

        this.output = null;

        this._tokenService.signIn(this.signInData).subscribe(
            res => {

                 if(res.status == 200){
                this.router.navigate(['/employees'])
                 }
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

    
      isLoggedIn(): boolean {
          return this._tokenService.userSignedIn();
         }

      logOut(): void {
          this._tokenService.signOut();
          this.router.navigate(['/']);
      }

      
}
