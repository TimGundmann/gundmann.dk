import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  serviceHost = `/time/`;
  authHeaderName = environment.authHeaderName;

  constructor(private httpClient: HttpClient) { }

  active(): Observable<Date> {
    return this.httpClient.get<Date>(`${this.serviceHost}registrations/active`);
  }

}
