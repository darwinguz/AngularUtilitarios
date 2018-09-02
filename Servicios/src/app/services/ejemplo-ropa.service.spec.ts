import { TestBed, inject } from '@angular/core/testing';

import { EjemploRopaService } from './ejemplo-ropa.service';

describe('EjemploRopaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EjemploRopaService]
    });
  });

  it('should be created', inject([EjemploRopaService], (service: EjemploRopaService) => {
    expect(service).toBeTruthy();
  }));
});
