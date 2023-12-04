import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.scss']
})
export class LoginSectionComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', Validators.required)
  })

  constructor(private _snackBar: MatSnackBar, private _route: Router) { }

  ngOnInit(): void {
  }

  submitUser(){
    this.loginForm.reset();
    this._snackBar.open('User doesn\'t exist', 'Dismiss', {
      duration: 3000
    });
  }

  openRegistration() {
    this._route.navigate(['registration']);
  }

}
