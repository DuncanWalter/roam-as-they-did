import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkWithHref, Router} from '@angular/router'
import {AppComponent} from "../app.component";
declare const firebase : any;
declare const $ : any;

@Component({
  selector: 'app-roam-login',
  templateUrl: './roam-login.component.html',
  styleUrls: ['./roam-login.component.css']
})
export class RoamLoginComponent implements OnInit {

  constructor(public router: Router) { }

  private email: string = '';
  private password: string = '';

  login(email?: string, password?: string){

    firebase.auth().signInWithEmailAndPassword(email || this.email, password || this.password).then(
      () => {
        $('input#password-field.roam').addClass('accepted');
        $('input#email-field.roam').addClass('accepted');
        setTimeout(()=>{
          AppComponent.navigate(this.router,'/dashboard',true,[".login"]);
        }, 700);
      },
      (error) => {
        $('input#password-field.roam').addClass('rejected');
        $('input#email-field.roam').addClass('rejected');
        console.dir(error);
      }
    );
  }

  signUp(email?: string, password?: string){

    firebase.auth().createUserWithEmailAndPassword(email || this.email, password || this.password).then(
      () => {
        $('input#password-field.roam').addClass('accepted');
        $('input#email-field.roam').addClass('accepted');
        setTimeout(()=>{
          AppComponent.navigate(this.router,'/dashboard',true,[".login"]);
        }, 700);
      },
      (error) => {
        $('input#password-field.roam').addClass('rejected');
        $('input#email-field.roam').addClass('rejected');
        console.dir(error);
      }
    );
  }

  ngOnInit() {

  }

}
