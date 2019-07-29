import { TestBed } from '@angular/core/testing';

import { SignupInfoService } from './signup-info.service';

describe('SignupInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupInfoService = TestBed.get(SignupInfoService);
    expect(service).toBeTruthy();
  });
});
