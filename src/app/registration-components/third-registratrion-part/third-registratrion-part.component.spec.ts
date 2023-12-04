import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdRegistratrionPartComponent } from './third-registratrion-part.component';

describe('ThirdRegistratrionPartComponent', () => {
  let component: ThirdRegistratrionPartComponent;
  let fixture: ComponentFixture<ThirdRegistratrionPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdRegistratrionPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdRegistratrionPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
