import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentGrado } from './edit.component';

describe('EditComponentGrado', () => {
  let component: EditComponentGrado;
  let fixture: ComponentFixture<EditComponentGrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponentGrado ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComponentGrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
