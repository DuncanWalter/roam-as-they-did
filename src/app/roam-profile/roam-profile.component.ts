import {Component, OnInit} from '@angular/core';
import { ProfileService } from '../profile.service'
declare const $: any;


@Component({
  selector: 'roam-profile',
  templateUrl: './roam-profile.component.html',
  styleUrls: ['./roam-profile.component.css'],
  providers: []
})
export class RoamProfileComponent implements OnInit{

  constructor(private profileService: ProfileService){

  }

  getProfile(){
    // this uses an arrow lambda and a then-resolved promise to to a task asynchronously...
    this.profileService.getProfile().then(profile => console.dir(profile));
  }

  ngOnInit(){
    $(".background").css('background','#FEF9D2');
  }

}
