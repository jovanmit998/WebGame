import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { debounceTime, map, Observable, startWith, switchMap } from 'rxjs';
import { CookiesComponent } from '../../cookies/cookies.component';
import { AppStateService } from '../../shared/app-state.service';

@Component({
  selector: 'app-third-registratrion-part',
  templateUrl: './third-registratrion-part.component.html',
  styleUrls: ['./third-registratrion-part.component.scss'],
})
export class ThirdRegistratrionPartComponent implements OnInit {
  thirdRegistrationForm = new FormGroup({
    petsName: new FormControl('', Validators.required),
    favoriteSport: new FormControl('', Validators.required),
    grandmasBirthDay: new FormControl('', [
      Validators.required,
      this.grandmasYearsValidator(),
    ]),
    virginity: new FormControl('', Validators.required),
  });
  filteredSports: Observable<string[]>;
  grandmasYear: boolean;
  isSexPlaceWild = false;

  constructor(
    public appState: AppStateService,
    private cookies: MatBottomSheet,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filterResults();
    this.openCookieSheet();
  }

  filterResults() {
    this.filteredSports = this.thirdRegistrationForm
      .get('favoriteSport')
      .valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        switchMap((inputValue: string) =>
          this.appState.getAllSports$.pipe(
            map((sportList: string[]) =>
              sportList.filter((sport: string) =>
                sport?.toLowerCase().includes(inputValue?.toLowerCase() || '')
              )
            )
          )
        )
      );
  }

  private grandmasYearsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      const grandmasBirthDay = +JSON.stringify(value)
        .split('-')[0]
        .substring(1);
      const isYearValid = this.appState.BirthDay - grandmasBirthDay > 30;

      return !isYearValid ? { invalidYear: 'Year is not valid' } : null;
    };
  }

  // grandmasYearsValidator(value) {
  //   const year = +JSON.stringify(value.value).split('-')[0].substring(1);
  //   this.grandmasYear = (this.appState.BirthDay - year) < 30;
  // }

  isVirginChecked(event: MatCheckboxChange) {
    if (event.checked) {
      this.thirdRegistrationForm.get('virginity').disable();
      this.thirdRegistrationForm.get('virginity').setValue('');
      this.isSexPlaceWild = false;
    } else this.thirdRegistrationForm.get('virginity').enable();
  }

  selectedSexPlace({ value }: MatSelectChange) {
    this.isSexPlaceWild =
      value === 'Amusement  Park' ||
      value === 'Pet shop' ||
      value === 'Public transport';
  }

  openCookieSheet() {
    this.cookies.open(CookiesComponent);
  }

  submitFun() {
    this.thirdRegistrationForm.disable();
    setTimeout(() => {
      this.router.navigate(['questionnaire']);
    }, 1500);
  }
}
