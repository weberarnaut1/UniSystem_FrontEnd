import { TestBed } from '@angular/core/testing';

import { ConsultaCEP } from './consulta-cep';

describe('ConsultaCEP', () => {
  let service: ConsultaCEP;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaCEP);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
