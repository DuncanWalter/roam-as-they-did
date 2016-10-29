import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoamProfileComponent } from './roam-profile/roam-profile.component';
import { RouterModule }   from '@angular/router';
import {ProfileService} from "./profile.service";
import { RoamHomeComponent } from './roam-home/roam-home.component';

@NgModule({
  declarations: [
    AppComponent,
    RoamProfileComponent,
    RoamHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {path: 'home', component: RoamHomeComponent},
      {path: 'profile', component: RoamProfileComponent}
    ])
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {

}


