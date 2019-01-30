import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private httpClient: HttpClient) { }

  public signIn(email: string, password: string): Observable<boolean> {
    return this.httpClient.post('https://www.gundmann.dk/users/login', `{ "username": "${email}", "password": "${password}" }`, {observe: 'response'})
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
  }

}
