import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

  getProfile(){
    console.log("serviced!");
    return Promise.resolve({name:"Bruce Wayne"});
  }

  constructor() { }

}
