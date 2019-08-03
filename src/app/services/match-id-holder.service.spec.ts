import { TestBed } from '@angular/core/testing';

import { MatchIdHolderService } from './match-id-holder.service';

describe('MatchIdHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchIdHolderService = TestBed.get(MatchIdHolderService);
    expect(service).toBeTruthy();
  });
});
