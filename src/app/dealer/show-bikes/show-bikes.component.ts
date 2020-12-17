import { Component, OnInit, Input } from '@angular/core';
import { DealerService } from 'app/dealer/dealer.service';
import { Dealer } from 'app/model/dealer.model';
import { Bike } from 'app/model/bike.model';

@Component({
  selector: 'app-show-bikes',
  templateUrl: './show-bikes.component.html',
  styleUrls: ['./show-bikes.component.scss']
})
export class ShowBikesComponent implements OnInit {

  constructor(private dealerService:DealerService) { }

 @Input() dealerId:number;
  dealer=new Dealer();
  allBikes:Bike[];

  ngOnInit() {
     this.dealerService.getDealer(this.dealerId).subscribe(result=>{
        this.dealer=result;
        console.log("Dealers : "+this.dealer.dealerId);
        this.dealerService.showAllBikes(this.dealer.dealerId).subscribe(bikes=>{
          this.allBikes=bikes;
        });
      });
  }

}
