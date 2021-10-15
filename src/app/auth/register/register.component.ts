import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'
import { RegisterService } from './../../services/register.service'
import {NgForm, Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

    msg!: string;
    source = timer(2000);

    isLogin: boolean = false;
    errorMessage!: string;

    constructor(
        private _api: ApiService,
        private _auth: AuthService,
        private _router: Router,
        private _regservice: RegisterService,
    ) {
      this.buildAndValidateForm();
    }

    get usernameInput() { return this.form.get('username'); }
    get emailInput() { return this.form.get('email'); }

    ngOnInit(){
        this.isUserLogin();
    }

    private buildAndValidateForm() {
      this.form = new FormGroup({
        name: new FormControl(null, [ Validators.required ]),
        username: new FormControl(null, [ Validators.required ]),
        email: new FormControl(null, [ Validators.required, Validators.email ]),
        phone: new FormControl(null, [ Validators.required ]),
        password: new FormControl(null, [ Validators.required ]),
      });
    }

    onSubmit() {
      if (this.form.invalid) {
        // alert('invalid form');
        this.errorMessage = 'Invalid form';
        return;
      }

      const user = this.form.value;
      console.log('Your form data : ', user);

      this._regservice.register(user)
        .then(response => {
          console.log(response);
          this.msg = 'A regisztráció sikeres volt';
          // TODO: ide tehetsz késleltetést, de szerintem inkább a visszajelző abalknak kelle modalnak, vagy alertnek lennie
          this._router.navigate(['kezdolap']).then();
        })
        .catch(error => {
          console.error('A regisztráció sikertelen volt!');
          console.error(error);
          this.errorMessage = error.message;
        });
    }

    isUserLogin() {
        if (this._auth.getUserDetails() != null) {
            this.isLogin = true;
        }
    }

}
