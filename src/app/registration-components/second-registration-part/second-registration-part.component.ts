import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AppStateService } from 'src/app/shared/app-state.service';


@Component({
  selector: 'app-second-registration-part',
  templateUrl: './second-registration-part.component.html',
  styleUrls: ['./second-registration-part.component.scss']
})
export class SecondRegistrationPartComponent {

  isRegistrateButtonDisabled = true;


  secondRegistrationForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    birthDate: new FormControl('', [Validators.required, this.CustomYearValidator()]),
    country: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    uniqueID: new FormControl('')
  });
  constructor(public appState: AppStateService) {
  }

  getUniqueID() {
    const randomValue = Math.floor(100000 + Math.random() * 900000);
    this.secondRegistrationForm.get('uniqueID').setValue(randomValue);
    this.isRegistrateButtonDisabled = false;
    this.secondRegistrationForm.disable();
  }


  private CustomYearValidator(): ValidatorFn {
    return(control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if(!value) return null;
      const year = +JSON.stringify(value).split('-')[0].substring(1);
      this.appState.BirthDay = year;
      const almostCurrentYear = new Date().getFullYear() - 2;

      const isYearLegit = (year <= 1900 || year >= almostCurrentYear) ? false : true;

      return !isYearLegit ? { invalidYear: 'Year is not valid' } : null;

    }
  }

}
