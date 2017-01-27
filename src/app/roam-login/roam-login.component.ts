import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkWithHref, Router} from '@angular/router'
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
        // this.statusColor = "#08a719";
        // B10HeaderComponent.paint("#08a719");
        // this.status = "Welcome back, friend";
        $('input#password-field.roam').addClass('accepted');
        $('input#email-field.roam').addClass('accepted');
        setTimeout(()=>{this.router.navigateByUrl('/dashboard')}, 1400);
      },
      (error) => {
        // this.statusColor = "#fa1256";
        // B10HeaderComponent.paint("#fa1256");
        // this.status = "Please double check your credentials; we didn't find anything";\
        $('input#password-field.roam').addClass('rejected');
        $('input#email-field.roam').addClass('rejected');
        console.dir(error);
      }
    );
  }

  signUp(email?: string, password?: string){

    firebase.auth().createUserWithEmailAndPassword(email || this.email, password || this.password).then(
      () => {
        // this.statusColor = "#08a719";
        // B10HeaderComponent.paint("#08a719");
        // this.status = "Welcome to the fold, friend";
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        // this.statusColor = "#fa1256";
        // B10HeaderComponent.paint("#fa1256");
        // this.status = "We're not saying we don't want you, but...";
        console.dir(error);
      }
    );
  }

  ngOnInit() {

  }

}
