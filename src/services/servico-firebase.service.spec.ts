import { TestBed } from '@angular/core/testing';

import { ServicoFirebaseService } from './servico-firebase.service';

describe('ServicoFirebaseService', () => {
  let service: ServicoFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
