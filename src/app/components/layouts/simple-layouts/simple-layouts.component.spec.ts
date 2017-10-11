import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLayoutsComponent } from './simple-layouts.component';

describe('SimpleLayoutsComponent', () => {
  let component: SimpleLayoutsComponent;
  let fixture: ComponentFixture<SimpleLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
