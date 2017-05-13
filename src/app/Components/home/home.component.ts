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
                private router:Router,
                    private authService: AuthService) {
     }
    




  ngOnInit() {
      
      if (this.authService.isLoggedIn()) {
         this.router.navigateByUrl('/inicio');
    }}



  

      onSubmit() {

        this.output = null;

        this.authService.logIn(this.signInData.email, this.signInData.password).subscribe(
            res => {

                 if(res.status == 200){
                this.router.navigate(['/inicio'])
                 }
                this.signInData     = <SignInData>{};
                this.output         = res;
            }, error => {
                this.signInData     = <SignInData>{};
                this.output         = error;
            }
        );
    }


    
      isLoggedIn(): boolean {
          return this.authService.isLoggedIn();
         }

      logOut(): void {
          this.authService.logOut();
      }

      
}
