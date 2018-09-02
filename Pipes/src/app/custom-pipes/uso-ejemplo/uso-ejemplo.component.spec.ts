import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoEjemploComponent } from './uso-ejemplo.component';

describe('UsoEjemploComponent', () => {
  let component: UsoEjemploComponent;
  let fixture: ComponentFixture<UsoEjemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsoEjemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsoEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
