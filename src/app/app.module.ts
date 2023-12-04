import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { LoginSectionComponent } from './login/login-section/login-section.component';
import { FirstRegistrationPartComponent } from './registration-components/first-registration-part/first-registration-part.component';
import { SecondRegistrationPartComponent } from './registration-components/second-registration-part/second-registration-part.component';
import { HelperDialogComponent } from './helper-dialog/helper-dialog.component';
import { ThirdRegistratrionPartComponent } from './registration-components/third-registratrion-part/third-registratrion-part.component';
import { ForthRegistrationPartComponent } from './registration-components/fourth-registration-part/forth-registration-part.component';
import { CookiesComponent } from './cookies/cookies.component';
import { EducationComponent } from './registration-components/fourth-registration-part/education/education.component';
import { HobbiesComponent } from './registration-components/fourth-registration-part/hobbies/hobbies.component';
import { WorkComponent } from './registration-components/fourth-registration-part/work/work.component';
import { HelperComponent } from './helper/helper.component';
import { HeaderComponent } from './header/header.component';
import { PositionMapDialogComponent } from './position-map-dialog/position-map-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    LoginSectionComponent,
    FirstRegistrationPartComponent,
    SecondRegistrationPartComponent,
    HelperDialogComponent,
    ThirdRegistratrionPartComponent,
    ForthRegistrationPartComponent,
    CookiesComponent,
    EducationComponent,
    HobbiesComponent,
    WorkComponent,
    HelperComponent,
    HeaderComponent,
    PositionMapDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatGridListModule,
    MatSliderModule,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
