import { Component } from '@angular/core';
import { AppStateService } from '../shared/app-state.service';
import { allRoutes } from '../app-routing.module';

@Component({
  selector: 'app-position-map-dialog',
  templateUrl: './position-map-dialog.component.html',
  styleUrls: ['./position-map-dialog.component.scss']
})
export class PositionMapDialogComponent {

  readonly allRoutes = allRoutes;
  constructor(public state: AppStateService) {
  }

  isFlagHightLighted(currentCard: string) {
    return currentCard === this.state.getHighlightedFlag()
  }
}
