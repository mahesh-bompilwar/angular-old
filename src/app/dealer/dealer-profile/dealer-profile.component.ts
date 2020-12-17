import { Component, OnInit, Input } from '@angular/core';
import { DealerService } from 'app/dealer/dealer.service';
import { Dealer } from 'app/model/dealer.model';

@Component({
  selector: 'app-dealer-profile',
  templateUrl: './dealer-profile.component.html',
  styleUrls: ['./dealer-profile.component.scss']
})
export class DealerProfileComponent implements OnInit {

  constructor(private dealerService:DealerService) { }

    @Input() dealerId:number;
  dealer=new Dealer();
  
  ngOnInit() {
    this.dealerService.getDealer(this.dealerId).subscribe(result =>{
        this.dealer=result;
        console.log(this.dealer);
    });
  }

}
