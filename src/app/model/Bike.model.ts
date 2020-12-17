import { BikesRates } from "./BikesRates.model";
import { Location } from "./Location.model";
import { Dealer } from "./Dealer.model";


export class Bike{

    bikeId:number;
    bikeBrand:string;
    bikeName:string;
    bikeNumber:string;
    bikeImage:string;
    manufactureYear:number;
    bikeEngCc:number;
	insuranceNo:number;
    dealer:Dealer
    bikesRate:BikesRates;
    location:Location;

}