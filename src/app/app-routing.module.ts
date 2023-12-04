import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForthRegistrationPartComponent } from './registration-components/fourth-registration-part/forth-registration-part.component';
import { LoginSectionComponent } from './login/login-section/login-section.component';
import { FirstRegistrationPartComponent } from './registration-components/first-registration-part/first-registration-part.component';
import { SecondRegistrationPartComponent } from './registration-components/second-registration-part/second-registration-part.component';
import { ThirdRegistratrionPartComponent } from './registration-components/third-registratrion-part/third-registratrion-part.component';

const routes: Routes = [
  {path: 'login', component: LoginSectionComponent},
  {path: 'registration', component: FirstRegistrationPartComponent},
  {path: 'registationID', component: SecondRegistrationPartComponent},
  {path: 'UniqueID', component: ThirdRegistratrionPartComponent},
  {path: 'questionnaire', component: ForthRegistrationPartComponent},
  {path: '', component: LoginSectionComponent},
  {path: '**', component: LoginSectionComponent},

];

export const allRoutes = ['registration', 'registationID', 'UniqueID', 'questionnaire'];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
