import { Component, OnInit } from '@angular/core';
declare const $ : any;

@Component({
  selector: 'app-roam-login',
  templateUrl: './roam-login.component.html',
  styleUrls: ['./roam-login.component.css']
})
export class RoamLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.background').css('background', 'url(../../assets/background.jpg)');
    // let e = $('.background-overlay');
    // e.css('background-color', '#70C9CB');
    // e.css('opacity','0.5');
    $('.background-overlay').css('background-color', '#70C9CB').css('opacity','0.5');
  }

}
