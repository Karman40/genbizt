import { Injectable } from '@angular/core';
import { Register } from '../model/register';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  async getRegister(){
    return this.http.get<Register[]>('api/registers').toPromise();
  }
  register(register: Register): Promise<Register> {
    return this.http.post<Register>('/api/register', register).toPromise();
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post('/api/login', {username, password});
  }
}