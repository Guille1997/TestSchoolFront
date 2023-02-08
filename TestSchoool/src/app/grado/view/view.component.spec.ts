import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponentGrado } from './view.component';

describe('ViewComponentGrado', () => {
  let component: ViewComponentGrado;
  let fixture: ComponentFixture<ViewComponentGrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponentGrado ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewComponentGrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
