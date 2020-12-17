import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerNavbarComponent } from './customer/customer-navbar/customer-navbar.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { DealerComponent } from './dealer/dealer.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { AdminService } from './admin/admin.service';
import { EmployeeService } from './employee/employee.service';
import { CustomerService } from './customer/customer.service';
import { DealerService } from './dealer/dealer.service';
import { SignupService } from './signup/signup.service';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { RegisterEmployeeComponent } from './admin/register-employee/register-employee.component';
import { RegisterBikeComponent } from './dealer/register-bike/register-bike.component';
import { DealerProfileComponent } from './dealer/dealer-profile/dealer-profile.component';
import { ShowBikesComponent } from './dealer/show-bikes/show-bikes.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CustomerComponent,
    CustomerNavbarComponent,
    AdminComponent,
    EmployeeComponent,
    DealerComponent,
    CustomerProfileComponent,
    RegisterEmployeeComponent,
    RegisterBikeComponent,
    DealerProfileComponent,
    ShowBikesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    SignupService,
    LoginService,
    AdminService,
    EmployeeService,
    DealerService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
