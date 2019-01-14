import { TestBed, async, inject } from '@angular/core/testing';

import { NotloggedGuard } from './notlogged.guard';

describe('NotloggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotloggedGuard]
    });
  });

  it('should ...', inject([NotloggedGuard], (guard: NotloggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
