import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MedecinComponent } from './medecin/medecin.component';
import { PatientComponent } from './patient/patient.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'medecin', component: MedecinComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'pharmacie', component: PharmacieComponent }


];
@NgModule({
  imports: [
    CommonModule,
    RouterModule. forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
