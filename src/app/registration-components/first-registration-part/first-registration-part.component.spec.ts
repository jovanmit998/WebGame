import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRegistrationPartComponent } from './first-registration-part.component';

describe('FirstRegistrationPartComponent', () => {
  let component: FirstRegistrationPartComponent;
  let fixture: ComponentFixture<FirstRegistrationPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstRegistrationPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstRegistrationPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
