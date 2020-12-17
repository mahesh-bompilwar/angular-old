import { Component, OnInit } from '@angular/core';
import { Login } from 'app/model/Login.model';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  test : Date = new Date();
    focus;
    focus1;

    login=new Login();
    constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit() {
  }

  signIn(){
    console.log(this.login);
    this.loginService.login(this.login).subscribe(result=>{
      this.login=result;
      console.log(this.login);
      switch(this.login.role){
        case 101: this.router.navigate(['admin']);
                  break;
        case 102: this.router.navigate(['employee',this.login.loginId]);
                  break;
        case 103: this.router.navigate(['dealer',this.login.loginId]);
                  break;
        case 104: this.router.navigate(['customer',this.login.loginId]);
                  break;
      }
    });
    
  }
}
