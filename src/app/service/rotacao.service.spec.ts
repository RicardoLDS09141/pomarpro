import { TestBed } from '@angular/core/testing';

import { RotacaoService } from './rotacao.service';

describe('RotacaoService', () => {
  let service: RotacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
