import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemopagecomponentComponent } from './demopagecomponent.component';

describe('DemopagecomponentComponent', () => {
  let component: DemopagecomponentComponent;
  let fixture: ComponentFixture<DemopagecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemopagecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemopagecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
