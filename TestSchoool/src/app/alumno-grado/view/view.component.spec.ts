import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponentAlumnoGrado } from './view.component';

describe('ViewComponentAlumnoGrado', () => {
  let component: ViewComponentAlumnoGrado;
  let fixture: ComponentFixture<ViewComponentAlumnoGrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponentAlumnoGrado ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewComponentAlumnoGrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
