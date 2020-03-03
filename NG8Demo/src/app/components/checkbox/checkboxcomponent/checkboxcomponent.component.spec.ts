import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxcomponentComponent } from './checkboxcomponent.component';

describe('CheckboxcomponentComponent', () => {
  let component: CheckboxcomponentComponent;
  let fixture: ComponentFixture<CheckboxcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
