import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationDetailComponent } from './aplication-detail.component';

describe('AplicationDetailComponent', () => {
  let component: AplicationDetailComponent;
  let fixture: ComponentFixture<AplicationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
