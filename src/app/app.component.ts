import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(
    public loginService: LoginService, 
    private _auth: AuthService,
    private _router: Router,
    ){
  }

  ngOnInit(){
  }

  logout() {
    this._auth.clearStorage()
    this._router.navigate(['']);
}
}