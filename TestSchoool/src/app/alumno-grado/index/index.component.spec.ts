import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentAlumnoGrado } from './index.component';

describe('IndexComponentAlumnoGrado', () => {
  let component: IndexComponentAlumnoGrado;
  let fixture: ComponentFixture<IndexComponentAlumnoGrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponentAlumnoGrado ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexComponentAlumnoGrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
