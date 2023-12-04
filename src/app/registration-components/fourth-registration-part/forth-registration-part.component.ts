import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { WorkComponent } from './work/work.component';

@Component({
  selector: 'app-forth-registration-part',
  templateUrl: './forth-registration-part.component.html',
  styleUrls: ['./forth-registration-part.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForthRegistrationPartComponent implements OnInit {

  isSubmitButtonVisible: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  redirectToNextPage(education: EducationComponent, hobbies: HobbiesComponent, work: WorkComponent) {
    console.log(hobbies.hobbiesForm.valid, education.educationForm.valid, !work.workForm.get('work').invalid);
  }

  showButton(firstExpansion: MatExpansionPanel, secondExpansion: MatExpansionPanel, thirdExpansion: MatExpansionPanel) {
    this.isSubmitButtonVisible = firstExpansion.expanded || secondExpansion.expanded || thirdExpansion.expanded
  }
}
