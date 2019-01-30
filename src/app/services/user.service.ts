import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from 'app/user/domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serviceHost = environment.serviceHost;

  constructor(private httpClient: HttpClient) { }

  public currentUserInfo(): Observable<User> {
    return this.httpClient.get<User>(`${this.serviceHost}current`); 
  }

  public signIn(email: string, password: string): Observable<boolean> {
    return this.httpClient.post(`${this.serviceHost}login`, `{ "username": "${email}", "password": "${password}" }`, {observe: 'response'})
      .pipe(
        map(resp => { 
            localStorage.setItem('Authorization', resp.headers.get('Authorization'));
            return true;
        }),
        catchError(error => {
          console.log(error);
          return of(false);
        }
        )
      );

  }}
