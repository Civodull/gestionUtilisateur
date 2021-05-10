import { TestBed } from '@angular/core/testing';

import { DeconnexionService } from './deconnexion.service';

describe('DeconnexionService', () => {
  let service: DeconnexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeconnexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
