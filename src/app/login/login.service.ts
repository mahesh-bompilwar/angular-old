import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'app/model/Login.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string='http://localhost:3301/login/';
  constructor(private _http:HttpClient) { }

  login(login){
    return this._http.post<Login>(this.url,login);
  }
}
