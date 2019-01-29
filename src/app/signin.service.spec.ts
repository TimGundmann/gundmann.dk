import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SigninService } from './signin.service';

describe('SigninService', () => {

  class HttpClientMock {}

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ { provide: HttpClient, useClass: HttpClientMock } ]
  }));

  it('should be created', () => {
    const service: SigninService = TestBed.get(SigninService);
    expect(service).toBeTruthy();
  });
});
