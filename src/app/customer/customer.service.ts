import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'app/model/Customer.model';
import { Image } from 'app/model/image.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string='http://localhost:8081/customer';
  constructor(private _http:HttpClient) { }

  getCustomer(loginId:number){
    return this._http.get<Customer>(this.url+'/'+loginId);
  }

}
