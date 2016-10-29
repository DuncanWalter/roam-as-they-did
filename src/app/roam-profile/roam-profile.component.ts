import { Component } from '@angular/core';
import { ProfileService } from '../profile.service'

@Component({
  selector: 'roam-profile',
  templateUrl: './roam-profile.component.html',
  styleUrls: ['./roam-profile.component.css'],
  providers: []
})
export class RoamProfileComponent {

  constructor(private profileService: ProfileService){

  }

  getProfile(){
    // this uses an arrow lambda and a then-resolved promise to to a task asynchronously...
    this.profileService.getProfile().then(profile => console.dir(profile));
  }

}
