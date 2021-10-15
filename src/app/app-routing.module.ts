import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { KezdolapComponent } from './kezdolap/kezdolap.component';
import { GeneraliComponent } from './generali/generali.component';
import { TermekekComponent } from './termekek/termekek.component';
import { NyugdijComponent } from './nyugdij/nyugdij.component';
import { AdatkezelesComponent } from './adatkezeles/adatkezeles.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { IdopontComponent } from './idopont/idopont.component';
import { AuthGuardService } from './services/auth.guard';


const routes: Routes = [
{
  path: '',
  component: KezdolapComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'kezdolap',
  component: KezdolapComponent
},
{
  path: 'generali',
  component: GeneraliComponent
},
{
  path: 'termekek',
  component: TermekekComponent
},
{
  path: 'nyugdij',
  component: NyugdijComponent
},
{
  path: 'adatkezeles',
  component: AdatkezelesComponent
},
{
  path: 'kapcsolat',
  component: KapcsolatComponent
},
{
  path: 'idopont',
  component: IdopontComponent,
  canActivate: [AuthGuardService],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }