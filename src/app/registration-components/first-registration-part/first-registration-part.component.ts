import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/shared/app-state.service';

@Component({
  selector: 'app-first-registration-part',
  templateUrl: './first-registration-part.component.html',
  styleUrls: ['./first-registration-part.component.scss']
})
export class FirstRegistrationPartComponent {

  registrationForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPass: new FormControl('', Validators.required),
    uniqueID: new FormControl('', Validators.required)
  })

  constructor(private _route: Router) {
  }

  getId(){
    this._route.navigate(['registationID']);
  }

}
