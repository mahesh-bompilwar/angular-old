import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/Customer.model';
import { Login } from 'app/model/Login.model';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { Address } from 'app/model/Address.model';
import { ImageSnippet } from 'app/model/imageSnippet';
import { Image } from 'app/model/image.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;

    constructor(private signUpService:SignupService,private router:Router) { }
    id:number;
    customer=new Customer();
    address=new Address();
    login=new Login();
    image=new Image();
    imageString:string;
    selectedFile:ImageSnippet;
    ngOnInit() {}

    processFile(imageInput:any){
        const file:File=imageInput.files[0];
      console.log("File : "+file.name);
      const reader=new FileReader();
      reader.addEventListener('load',(event:any)=>{
        this.selectedFile=new ImageSnippet(event.target.result,file);
        this.signUpService.uploadImage(this.selectedFile.file).subscribe(result=>{
            this.image=result;
            console.log(this.image.imageString);
            this.imageString=this.image.imageString;
        })
      });
      reader.readAsDataURL(file);
    }

    register(){
        this.customer.login=this.login;
        this.customer.address=this.address;
        this.customer.image=this.imageString;
        console.log(this.customer);
        this.signUpService.registerCustomer(this.customer).subscribe(result=>{
            this.id=result;
            if(this.id>0){
                this.router.navigate(['']);
            }
        });
    }
}
