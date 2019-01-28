import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SigninComponent } from './signin/signin.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { AttComponent } from './att/att.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { MatCardModule, MatSliderModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'  },
  { path: 'home', component: HomeComponent  },
  { path: 'signin', component: SigninComponent  },
  { path: 'att', component: AttComponent },
  { path: 'user', component: UserInfoComponent, canActivate: [AuthGuard] }
];

export function tokenGetter() {
  return localStorage.getItem('Authorization');
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SigninComponent,
    HomeComponent,
    UserInfoComponent,
    AttComponent,
  ],
  imports: [
    NgxAudioPlayerModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatCardModule,
    MatSliderModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['gundmann.dk'],
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
