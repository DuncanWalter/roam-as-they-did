import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ROAM! AND STUFF...';

  ngOnInit(){
    // set up the bg
    $('.background').css('background', 'url(../../assets/background.jpg)');
    $('.background-overlay').css('background-color', '#70C9CB').css('opacity','0.5');
  }
}
