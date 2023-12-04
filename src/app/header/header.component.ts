import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PositionMapDialogComponent } from '../position-map-dialog/position-map-dialog.component';
import { AppStateService } from '../shared/app-state.service';
import { allRoutes } from '../app-routing.module';
import { combineLatest, map, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMapIconShowing: Observable<boolean>;
  vm$: Observable<[string, boolean]>;

  constructor(private dialog: MatDialog, public appState: AppStateService) {
   }

  ngOnInit(): void {
    this.initializeMapIcon();
    this.vm$ = combineLatest([this.appState.getCurrentFlag(), this.isMapIconShowing]);
  }

  initializeMapIcon() {
    this.isMapIconShowing = this.appState.currentRoute$.pipe(
      map(currentRoute => !!allRoutes.find(route => route === currentRoute))
    )
  }

  openMap() {
    const dialogRef = this.dialog.open(PositionMapDialogComponent, {
      hasBackdrop: true,
      width: "700px"
    })
  }

}
