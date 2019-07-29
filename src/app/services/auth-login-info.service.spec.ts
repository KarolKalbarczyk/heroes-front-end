import { TestBed } from '@angular/core/testing';

import { AuthLoginInfoService } from './auth-login-info.service';

describe('AuthLoginInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthLoginInfoService = TestBed.get(AuthLoginInfoService);
    expect(service).toBeTruthy();
  });
});
