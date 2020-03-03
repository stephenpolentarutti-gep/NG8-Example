import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlcomponentComponent } from './ddlcomponent.component';

describe('DdlcomponentComponent', () => {
  let component: DdlcomponentComponent;
  let fixture: ComponentFixture<DdlcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdlcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdlcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
