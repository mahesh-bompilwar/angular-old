import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from 'app/model/image.model';
import { Bike } from './../model/Bike.model';
import { Dealer } from './../model/Dealer.model';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  url:string='http://localhost:3301/bike';
  url1:string='http://localhost:3301/dealer'

  constructor(private _http:HttpClient) { }

   uploadImage(image){
    const formData=new FormData();
    formData.append('image',image);
    return this._http.post<Image>(this.url+'/process',formData);
  }

  registerBike(bike:Bike){
    console.log("Service "+bike.bikesRate.perDay);
    return this._http.post<number>(this.url+'/',bike);
  }

  getDealer(dealerId){
    return this._http.get<Dealer>(this.url1+'/'+dealerId);
  }

  showAllBikes(dealerId){  
    return this._http.get<Bike[]>(this.url+'/'+dealerId);
  }
}
