import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition(':enter', [
        style({ height: 0 }), animate('350ms', style({ height: "*" }))]
      )
    ]
  )]
})
export class HobbiesComponent implements OnInit {

  hobbiesForm = new FormGroup({
    favoriteHobby: new FormControl('', [Validators.required, Validators.minLength(2)]),
    favoriteHobbyExplanation: new FormControl('', Validators.required),
    slider: new FormControl('', Validators.required),
  });
  sliderLabel = new BehaviorSubject('');

  constructor() { }

  ngOnInit(): void {
    this.sliderValueChange();
  }

  sliderValueChange() {
    this.hobbiesForm.get('slider').valueChanges.subscribe(
      sliderValue => {
        this.sliderLabel.next(
          (sliderValue <= 3) ? 'Pretty normal': (sliderValue > 3 && sliderValue <= 6) ? 'A little weird': 'Im a disappointment'
        )
      }
    )
}

}
