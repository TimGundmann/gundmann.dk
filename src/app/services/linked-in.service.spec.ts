import { TestBed } from '@angular/core/testing';

import { LinkedInService } from './linked-in.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LinkedInService', () => {
  

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
  }));

  it('should be created', () => {
    const service: LinkedInService = TestBed.get(LinkedInService);
    expect(service).toBeTruthy();
  });
});
