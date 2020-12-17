import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'app/login/login.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {

  
  constructor( private adminservice:AdminService,private logservice:LoginService, private route:Router) { } 
  ngOnInit() {
  }
}
