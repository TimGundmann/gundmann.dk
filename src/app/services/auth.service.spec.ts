import { JwtHelperService } from '@auth0/angular-jwt';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {

  class JwtHelperServiceMock {} 

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: JwtHelperService, useClass: JwtHelperServiceMock }
    ]  
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
  
});
