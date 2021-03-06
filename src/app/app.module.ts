import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/service/services/services.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/log/login/login.component';
import { AboutComponent } from './components/log/about/about.component';
import { ProfileViewComponent } from './components/profile/profile-view/profile-view.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { ServiceAddComponent } from './components/service/service-add/service-add.component';
import { LogupComponent } from './components/log/logup/logup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceEditComponent } from './components/service/service-edit/service-edit.component';
import { ServiceSearchComponent } from './components/service/service-search/service-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    LoginComponent,
    AboutComponent,
    ProfileViewComponent,
    ProfileEditComponent,
    ServiceAddComponent,
    LogupComponent,
    ServiceEditComponent,
    ServiceSearchComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
