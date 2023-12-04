import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthRegistrationPartComponent } from './forth-registration-part.component';

describe('ForthRegistrationPartComponent', () => {
  let component: ForthRegistrationPartComponent;
  let fixture: ComponentFixture<ForthRegistrationPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthRegistrationPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthRegistrationPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
