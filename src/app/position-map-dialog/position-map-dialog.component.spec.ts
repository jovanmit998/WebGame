import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionMapDialogComponent } from './position-map-dialog.component';

describe('PositionMapDialogComponent', () => {
  let component: PositionMapDialogComponent;
  let fixture: ComponentFixture<PositionMapDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionMapDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionMapDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
