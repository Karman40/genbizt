import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'
import { Router } from '@angular/router';
import { RegisterService } from './../../services/register.service'
import { timer } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    msg!:string;
    source=timer(2000);

    isLogin: boolean = false
    errorMessage!: string

    form = {
        username: '',
        password: ''
    }

    constructor(
        private _api: ApiService,
        private _auth: AuthService,
        private _router: Router,
        private _regservice: RegisterService
    ) { }
    ngOnInit() {
        this.isUserLogin(

        );
    }
     
    onSubmit(form: NgForm) {
        console.log('Your form data : ', this.form.username);

        this._regservice.login(this.form.username, this.form.password);
 

        this._regservice.login(this.form.username, this.form.password).subscribe(
            data => {
                if (data.status) {
                    console.log("data:" + data)
                    this._auth.setDataInLocalStorage('userData', JSON.stringify(data.username));
                    this._auth.setDataInLocalStorage('token', data.token);

                    this.msg = "A belépés sikeres volt. Jó böngészést kívánok!";
                    this.source.subscribe(ido=> this._router.navigate(['kezdolap']));
                } else {

                }
            },
            err => {
                this.errorMessage = err.error.message;
                this.msg = "Sikertelen belépés" ;
            }
        );
    }
    isUserLogin() {
        console.log(this._auth.getUserDetails())
        if (this._auth.getUserDetails() != null) {
            this.isLogin = true;
        }
    }
    logout() {
        this._auth.clearStorage()
        this._router.navigate(['']);
    }
}