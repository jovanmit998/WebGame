import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginSectionComponent } from '../login/login-section/login-section.component';
import { AppStateService } from '../shared/app-state.service';

@Component({
  selector: 'app-helper-dialog',
  templateUrl: './helper-dialog.component.html',
  styleUrls: ['./helper-dialog.component.scss']
})
export class HelperDialogComponent {

  index: number = 0;

  constructor(private dialogRef: MatDialogRef<LoginSectionComponent>, public state: AppStateService) {
  }

  onClose() {
    this.dialogRef.close();
  }

  moveRight(helperText: string[]) {
    this.index++;
    if(this.index >= helperText.length) this.index = 0;
  }

  moveLeft(helperText: string[]) {
    this.index--;
    if(this.index < 0) this.index = helperText.length - 1;
  }

}
