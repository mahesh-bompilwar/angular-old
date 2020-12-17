import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/Customer.model';
import { Login } from 'app/model/Login.model';
import { Router } from '@angular/router';
import { Address } from 'app/model/Address.model';
import { ImageSnippet } from 'app/model/imageSnippet';
import { Image } from 'app/model/image.model';
import { Bike } from 'app/model/bike.model';
import { Location } from 'app/model/location.model';
import { BikesRates } from 'app/model/bikesrates.model';
import { Dealer } from 'app/model/dealer.model';
import { DealerService } from 'app/dealer/dealer.service';

@Component({
  selector: 'app-register-bike',
  templateUrl: './register-bike.component.html',
  styleUrls: ['./register-bike.component.scss']
})
export class RegisterBikeComponent implements OnInit {

  constructor(private dealerService:DealerService) { }


    bike=new Bike();
    dealer=new Dealer();
    image=new Image();
    imageString:string;
    selectedFile:ImageSnippet;
    bikesRate=new BikesRates();
    location=new Location();

  ngOnInit() {
  }

processFile(imageInput:any){
        const file:File=imageInput.files[0];
      console.log("File : "+file.name);
      const reader=new FileReader();
      reader.addEventListener('load',(event:any)=>{
        this.selectedFile=new ImageSnippet(event.target.result,file);
        this.dealerService.uploadImage(this.selectedFile.file).subscribe(result=>{
            this.image=result;
            console.log("Image "+this.image.imageString);
            this.imageString=this.image.imageString;
        })
      });
      reader.readAsDataURL(file);
    }

    addBike(bike){
         console.log("Rate "+this.bikesRate.perDay);
         this.bike.bikesRate=this.bikesRate;
         this.bike.location=this.location;
         this.bike.dealer=this.dealer;
         this.bike.bikeImage=this.imageString;
         console.log("Rate "+this.bike.bikesRate.perDay);
         console.log("Image "+this.bike.bikeImage);
         this.dealerService.registerBike(this.bike).subscribe(result=>{});
    }
}
