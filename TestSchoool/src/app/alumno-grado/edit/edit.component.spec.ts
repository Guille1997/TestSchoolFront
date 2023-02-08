import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentAlumnoGrado } from './edit.component';

describe('EditComponentAlumnoGrado', () => {
  let component: EditComponentAlumnoGrado;
  let fixture: ComponentFixture<EditComponentAlumnoGrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponentAlumnoGrado ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComponentAlumnoGrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
