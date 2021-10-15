import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { GeneraliComponent } from './generali/generali.component';
import { TermekekComponent } from './termekek/termekek.component';
import { NyugdijComponent } from './nyugdij/nyugdij.component';
import { AdatkezelesComponent } from './adatkezeles/adatkezeles.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { IdopontComponent } from './idopont/idopont.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    KezdolapComponent,
    GeneraliComponent,
    TermekekComponent,
    NyugdijComponent,
    AdatkezelesComponent,
    KapcsolatComponent,
    IdopontComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }