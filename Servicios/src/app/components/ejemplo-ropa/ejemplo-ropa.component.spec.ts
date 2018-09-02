import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploRopaComponent } from './ejemplo-ropa.component';

describe('EjemploRopaComponent', () => {
  let component: EjemploRopaComponent;
  let fixture: ComponentFixture<EjemploRopaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploRopaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
