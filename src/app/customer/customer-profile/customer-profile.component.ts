import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'app/model/Customer.model';
import { Image } from 'app/model/image.model';
import { CustomerService } from '../customer.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

  constructor(private customerService:CustomerService,private domSanitizer:DomSanitizer) { }
  @Input() id:number;
  
  customer=new Customer();
  path:any="data:image/jpg;base64,";
  
  ngOnInit() {
    console.log("Login id"+this.id);
    this.customerService.getCustomer(this.id).subscribe(result=>{
      this.customer=result;
      console.log(this.customer.image);
      this.path=this.path+this.customer.image;
    });
  }

}
