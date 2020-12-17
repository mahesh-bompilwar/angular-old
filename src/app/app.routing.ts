import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { DealerComponent } from './dealer/dealer.component';

const routes: Routes =[
    // Common
    { path:'',component:LandingComponent},
    { path:'login',component:LoginComponent},
    { path: 'home',component: HomeComponent },
    { path: 'signup',component: SignupComponent },
    
    // Admin Routes
    {path:'admin',component:AdminComponent,children:[

    ]},

    // Employee Routes
    {path:'employee/:id',component:EmployeeComponent,children:[

    ]},

    // Dealer Routes
    {path:'dealer/:id',component:DealerComponent,children:[

    ]},

    // Customer Routes
    { path: 'customer/:id', component:CustomerComponent,children:[
      { path: 'user-profile',component: ProfileComponent },
    ]},
    
    { path: 'nucleoicons',component: NucleoiconsComponent },
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
