import { TestBed, inject } from '@angular/core/testing';

import { CampusService } from './campus.service';

describe('CampusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampusService]
    });
  });

  it('should be created', inject([CampusService], (service: CampusService) => {
    expect(service).toBeTruthy();
  }));
});
