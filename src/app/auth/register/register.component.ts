import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'
import { RegisterService } from './../../services/register.service'
import { NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    msg!: string;
    source = timer(2000);

    isLogin: boolean = false
    errorMessage!: string  

    constructor(
        private _api: ApiService,
        private _auth: AuthService,
        private _router: Router,
        private _regservice: RegisterService,

        private form: FormGroup,
        private formBuilder: FormBuilder,

    ) { }

    ngOnInit(){
        this.isUserLogin(); 
    }

    onSubmit(form: NgForm) {
        console.log('Your form data : ', form.value);
        const user = form.value

        
        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            password: ['', Validators.required],
        });
        

        this._regservice.register(user);

        this.msg = "A regisztráció sikeres volt";
        this.source.subscribe(ido => this._router.navigate(['kezdolap']));
    }

    isUserLogin() {
        if (this._auth.getUserDetails() != null) {
            this.isLogin = true;
        }
    }      

}