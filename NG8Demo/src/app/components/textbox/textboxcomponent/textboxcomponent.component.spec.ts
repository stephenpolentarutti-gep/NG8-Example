import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxcomponentComponent } from './textboxcomponent.component';

describe('TextboxcomponentComponent', () => {
  let component: TextboxcomponentComponent;
  let fixture: ComponentFixture<TextboxcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextboxcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
