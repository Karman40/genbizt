import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private http: HttpClient
    ) { }

  async getLogin(){
    return this.http.get<Login[]>('api/logins').toPromise();
  }

  async createLogin(login: Login){
    return this.http.post<Login>('/api/login', login).toPromise();
  }
  logout() {
    this._auth.clearStorage()
    this._router.navigate(['']);
}
}