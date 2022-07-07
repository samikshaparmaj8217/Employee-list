import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmppageComponent } from './emppage.component';

describe('EmppageComponent', () => {
  let component: EmppageComponent;
  let fixture: ComponentFixture<EmppageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmppageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
