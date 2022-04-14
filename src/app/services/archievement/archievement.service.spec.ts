import { TestBed } from '@angular/core/testing';

import { ArchievementService } from './archievement.service';

describe('ArchievementService', () => {
  let service: ArchievementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchievementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
