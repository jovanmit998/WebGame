import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationForm = new FormGroup({
    levelOfEducation: new FormControl('', Validators.required),
    favoriteSubject: new FormControl('', Validators.required),
  });

  educationLevels = [
    'Primary Education',
    'Lower Secondary Education',
    'Upper Secondary Education',
    'Post-secondary non-Tertiary Education',
    'Short-cycle tertiary education',
    'Bachelors degree or equivalent tertiary education level',
    'Masters degree or equivalent tertiary education level',
    'Doctoral degree or equivalent tertiary education level'
  ];
  educationTable = [
    'Teachers getting paid more',
    'Students having more time to study',
    'Less school shooting',
    'Bullying only after 1pm',
    'No more selling grades for sexual favors'
  ];
  isMastersOrHigher = new BehaviorSubject(false);
  highLightedRow: number;
  niceAudio = new Audio();

  constructor() { }

  ngOnInit(): void {
    this.niceAudio.src = "assets/nice.mp3";
  }

  itemSelected(item: MatSelectChange) {
    if((item.value as string).startsWith('Masters') || (item.value as string).startsWith('Doctoral'))
    this.isMastersOrHigher.next(true)
    else this.isMastersOrHigher.next(false);
  }

  rowSelected(index: number) {
    this.highLightedRow = index;
    if(this.educationTable[index] === 'No more selling grades for sexual favors') {
      this.niceAudio.load();
      this.niceAudio.volume = 0.5;
      this.niceAudio.play();
    }
  }

}
