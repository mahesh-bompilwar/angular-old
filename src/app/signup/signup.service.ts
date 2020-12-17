import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from 'app/model/image.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url:string='http://localhost:3306/';

  constructor(private _http:HttpClient) { }

  uploadImage(image){
    const formData=new FormData();
    formData.append('image',image);
    return this._http.post<Image>(this.url+'customer/process',formData);
  }

  registerCustomer(customer){
    return this._http.post<number>(this.url+'customer/add',customer);
  }
}
