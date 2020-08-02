import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  static readonly SERVICE_HOST = `/time/registrations/`;
  static readonly ACTIVE = TimeService.SERVICE_HOST + 'active';
  static readonly START = TimeService.SERVICE_HOST + 'start';
  static readonly STOP = TimeService.SERVICE_HOST + 'stop';

  constructor(private httpClient: HttpClient) { }

  active(): Observable<Date> {
    return this.httpClient.get<Date>(TimeService.ACTIVE);
  }

  activate(): Observable<Date> {
    const now = new Date();
    return this.httpClient.post<Date>(TimeService.START, { date: now })
      .pipe(map(() => now));
  }

  deactivate(): Observable<void> {
    return this.httpClient.post<void>(TimeService.STOP, { date: new Date() });
  }

}
