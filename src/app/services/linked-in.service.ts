import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinkedInService {
 
  serviceHost = '/users/';

  constructor(private http: HttpClient) { }

  getProfile(code: string): Observable<any> {
    return this.accessToken(code).pipe(
      map(result => 
        this.http.get('https://api.linkedin.com/v2/me', {
          headers: new HttpHeaders({
            Authorization: `Bearer ${result.access_token}`,
            'cache-control': 'no-cache',
            'X-Restli-Protocol-Version': '2.0.0',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded'
          })
        }) 
      ));
  }

  public linkedInLogin(): Observable<any> {
    return this.http.get(`${this.serviceHost}linkedin`);
  }

  public accessToken(code: string): Observable<any> {
    // return this.http.post(`https://www.linkedin.com/oauth/v2/accessToken?grant_type=&code=${code}&redirect_uri=http%3A%2F%2Flocalhost:4200%2Fauth&client_id=786wd214gl62wf&client_secret=oMxyJQRL33UMTuR1`, null);
    return this.http.get(`${this.serviceHost}accessToken?code=${code}`);
  }

}
