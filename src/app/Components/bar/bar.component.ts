import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AuthService }  from '../../Services/authentication/auth.service'


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor(private authService: AuthService) {}
  
    isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  /*
  isLoggedOut(): boolean {
    return !this.authService.isLoggedIn();
  }


  */
  ngOnInit(){
      console.log(this.authService.isLoggedIn())
  }
    logOut(): void {
    this.authService.logOut();
  }

}
