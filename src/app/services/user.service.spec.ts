import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';

describe('UserService', () => {

  class HttpClientMock {}

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ { provide: HttpClient, useClass: HttpClientMock } ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
