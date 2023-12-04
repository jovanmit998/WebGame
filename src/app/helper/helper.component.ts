import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HelperDialogComponent } from '../helper-dialog/helper-dialog.component';
import { AppStateService } from '../shared/app-state.service';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.scss'],
})
export class HelperComponent {
  @Input() characterText: string[];
  isDialogClosed = true;

  constructor(public dialog: MatDialog, private state: AppStateService) {}

  openAssistant() {
    const dialogRef = this.dialog.open(HelperDialogComponent, {
      data: this.characterText,
      hasBackdrop: false,
      position: { top: '17%', right: '1%' },
      width: '25%',
      panelClass: 'my-dialog',
    });

    dialogRef.beforeClosed().subscribe((_) => (this.isDialogClosed = true));

    dialogRef.afterOpened().subscribe((_) => (this.isDialogClosed = false));

    this.closeHelperWhenRerouted(dialogRef);
  }

  closeHelperWhenRerouted(dialog: MatDialogRef<HelperDialogComponent, any>) {
    this.state.currentRoute$.subscribe(() => dialog.close());
  }
}
