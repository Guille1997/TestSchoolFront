import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponentGrado } from './create.component';

describe('CreateComponentGrado', () => {
  let component: CreateComponentGrado;
  let fixture: ComponentFixture<CreateComponentGrado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponentGrado ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComponentGrado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
