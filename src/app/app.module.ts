import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoamProfileComponent } from './roam-profile/roam-profile.component';
import { RouterModule }   from '@angular/router';
import {ProfileService} from "./profile.service";
import { RoamHomeComponent } from './roam-home/roam-home.component';
import { RoamLoginComponent } from './roam-login/roam-login.component';
import { RoamDashboardComponent } from './roam-dashboard/roam-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RoamProfileComponent,
    RoamHomeComponent,
    RoamLoginComponent,
    RoamDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {path: 'login', component: RoamLoginComponent},
      {path: 'profile', component: RoamProfileComponent},
      {path: 'dashboard', component: RoamDashboardComponent}
    ])
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {

}


