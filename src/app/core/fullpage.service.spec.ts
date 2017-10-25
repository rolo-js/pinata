import { TestBed, inject } from '@angular/core/testing';

import { FullpageService } from './fullpage.service';

describe('FullpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FullpageService]
    });
  });

  it('should be created', inject([FullpageService], (service: FullpageService) => {
    expect(service).toBeTruthy();
  }));
});
