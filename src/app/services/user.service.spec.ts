import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';
import { AuthService } from './auth.service';

describe('UserService', () => {

  class HttpClientMock {}
  class AuthServiceMock {}

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ 
      { provide: HttpClient, useClass: HttpClientMock },
      { provide: AuthService, useClass: AuthServiceMock }
    ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
