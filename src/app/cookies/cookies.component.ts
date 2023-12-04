import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {
  @ViewChild('movingElement') movingButton: MatButton;

  isButtonPositionRight = true;

  constructor(public bottomSheet: MatBottomSheetRef<CookiesComponent>) { }

  ngOnInit(): void {
    this.bottomSheet.disableClose = true;
  }

  moveButton() {
    const translate = this.isButtonPositionRight ? -300 : 0;
    this.movingButton._elementRef.nativeElement.style.transition = "250ms";
    this.movingButton._elementRef.nativeElement.style.transform = `translate(${translate}px)`;
    this.isButtonPositionRight = !this.isButtonPositionRight;
  }

}
