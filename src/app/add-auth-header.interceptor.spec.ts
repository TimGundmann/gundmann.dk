import { TestBed } from '@angular/core/testing';

import { AddAuthHeaderInterceptor } from './add-auth-header.interceptor';

describe('AddAuthHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddAuthHeaderInterceptor = TestBed.get(AddAuthHeaderInterceptor);
    expect(service).toBeTruthy();
  });
});
