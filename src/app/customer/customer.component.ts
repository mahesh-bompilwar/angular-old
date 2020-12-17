import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './customer.service';
import { Customer } from 'app/model/Customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private _active:ActivatedRoute,private _customerService:CustomerService,private _router:Router) { }
  id:number;
  customer=new Customer();

  ngOnInit() {
    this._active.params.subscribe(param=>{
      this.id=param['id'];
    });
    
  }

}
