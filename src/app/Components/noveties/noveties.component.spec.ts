import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovetiesComponent } from './noveties.component';

describe('NovetiesComponent', () => {
  let component: NovetiesComponent;
  let fixture: ComponentFixture<NovetiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovetiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovetiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
