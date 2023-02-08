import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponentAlumnoGrado } from './create.component';

describe('CreateComponentAlumnoGrado', () => {
  let component: CreateComponentAlumnoGrado;
  let fixture: ComponentFixture<CreateComponentAlumnoGrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponentAlumnoGrado ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComponentAlumnoGrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
