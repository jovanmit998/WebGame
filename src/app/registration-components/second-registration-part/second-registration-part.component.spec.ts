import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRegistrationPartComponent } from './second-registration-part.component';

describe('SecondRegistrationPartComponent', () => {
  let component: SecondRegistrationPartComponent;
  let fixture: ComponentFixture<SecondRegistrationPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondRegistrationPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondRegistrationPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
