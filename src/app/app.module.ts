import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavComponent } from './Accueil/nav/nav.component';
import { SlideComponent } from './Accueil/slide/slide.component';
import { FooterComponent } from './Accueil/footer/footer.component';
import { MedecinComponent } from './medecin/medecin.component';
import { PatientComponent } from './patient/patient.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavComponent,
    SlideComponent,
    FooterComponent,
    MedecinComponent,
    PatientComponent,
    PharmacieComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
