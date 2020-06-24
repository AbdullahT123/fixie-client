import { TestBed } from '@angular/core/testing';

import { FordrverService } from './fordriver.service';

describe('FordrverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FordrverService = TestBed.get(FordrverService);
    expect(service).toBeTruthy();
  });
});