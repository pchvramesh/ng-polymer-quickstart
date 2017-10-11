import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLayoutsComponent } from './full-layouts.component';

describe('FullLayoutsComponent', () => {
  let component: FullLayoutsComponent;
  let fixture: ComponentFixture<FullLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
