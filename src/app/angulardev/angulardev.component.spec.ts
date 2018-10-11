import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardevComponent } from './angulardev.component';

describe('AngulardevComponent', () => {
  let component: AngulardevComponent;
  let fixture: ComponentFixture<AngulardevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulardevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulardevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
