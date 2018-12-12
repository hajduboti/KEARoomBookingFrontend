import { TestBed, async, inject } from '@angular/core/testing';

import { DateselectGuard } from './dateselect.guard';

describe('DateselectGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateselectGuard]
    });
  });

  it('should ...', inject([DateselectGuard], (guard: DateselectGuard) => {
    expect(guard).toBeTruthy();
  }));
});
