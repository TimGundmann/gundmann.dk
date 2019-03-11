import { AddAuthHeaderInterceptor } from './add-auth-header.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SigninComponent } from './user/signin/signin.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { environment } from 'environments/environment';
import { SignupComponent } from './user/signup/signup.component';
import { ActivateComponent } from './user/activate/activate.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'activate/:token', component: ActivateComponent },
  { path: 'user', component: UserInfoComponent, canActivate: [AuthGuard] }
];

const authTokenName = environment.authTokenName;

export function tokenGetter() {
  return localStorage.getItem(authTokenName);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SigninComponent,
    HomeComponent,
    UserInfoComponent,
    SignupComponent,
    ActivateComponent,
  ],
  providers: [
    { provide: LocationStrategy, 
      useClass: HashLocationStrategy 
    },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AddAuthHeaderInterceptor,
    multi: true,
  }],
  imports: [
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
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
