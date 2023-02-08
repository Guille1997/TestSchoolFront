import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentGrado } from './index.component';

describe('IndexComponentGrado', () => {
  let component: IndexComponentGrado;
  let fixture: ComponentFixture<IndexComponentGrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponentGrado ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexComponentGrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
