import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Roam As We Do';

  ngOnInit(){
    // set up the bg
    let bg = $('.background');
    // $('.background').css('background', 'url(../../assets/background.jpg)');
    bg.css('background','#FAB68D'); /* For browsers that do not support gradients */
    bg.css('background','-webkit-linear-gradient(#FAB68D, #F6956F)'); /* For Safari 5.1 to 6.0 */
    bg.css('background','-o-linear-gradient(#FAB68D, #F6956F)'); /* For Opera 11.1 to 12.0 */
    bg.css('background','-moz-linear-gradient(#FAB68D, #F6956F)'); /* For Firefox 3.6 to 15 */
    bg.css('background','linear-gradient(#FAB68D, #F6956F)'); /* Standard syntax */
    $('.background-overlay').css('background-color', '#70C9CB').css('opacity','0');
  }

  // extends angular to allow custom-activated exit animations
  static navigate(router: Router, path: string, scrollToTop?: boolean, selectors?: string[]){
    // for each given selector (or the default exiting class...)
    (selectors || ['.exitable']).forEach((selector)=>{
      // select those elements and begin animating their exit
      $(selector).addClass('exit');
      if(scrollToTop != false){ // !! WARNING: looks silly, but catches undefined input properly. Do not change
        $("html, body").animate({ scrollTop: 0 }, "slow");
      }
      // and then stop animating after a timeout and subsequent navigation
      setTimeout(()=>{
        router.navigateByUrl(path).then(()=>{
          $('.exit').removeClass('exit');
        });
      }, 500);
    });
  }

}
