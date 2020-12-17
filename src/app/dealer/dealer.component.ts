import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {Dealer } from './../model/Dealer.model';
@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss']
})
export class DealerComponent implements OnInit {

  private toggleButton: any;
  private sidebarVisible: boolean;
dealerId:number;
regBikeDiv:boolean=false;
showBikesDiv:boolean=false;
dealerProfile:boolean=false;
home:boolean=true;
dealer=new Dealer();

    constructor(public location: Location, private element : ElementRef,private actRoute:ActivatedRoute) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.actRoute.params.subscribe(param=>{
            this.dealerId=param['id'];
            console.log("dealer id"+this.dealerId);
        });
    }
 change(ch)
        {
            console.log("in change function");
            switch(ch){

                case 1:
                    this.regBikeDiv=true;
                    this.home=false;
                    this.dealerProfile=false;
                    this.showBikesDiv=false;
                    console.log(this.regBikeDiv)
                    break;

                 case 2: 
                    this.dealerProfile=true;
                    this.home=false;
                    this.regBikeDiv=false;
                    this.showBikesDiv=false;
                    break;

                 case 3 :
                   this.showBikesDiv=true;
                   this.regBikeDiv=false;
                   this.dealerProfile=false;
                   this.home=false;
                   console.log(this.showBikesDiv);
                    break;
            }
        }

















    // navbar component code
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

}
