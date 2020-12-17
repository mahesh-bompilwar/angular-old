import { Document } from "./Document.model";
import { Location } from "./Location.model";
import { Images } from "./Images.model";
import { Bike } from "./Bike.model";
import { Login } from "./Login.model";

export class Dealer{

    dealerId:number;
    dealerName:string;
    dealerEmail:string;
    dealerMobileno:number;
    dealerAadharid:number;
    dealerAddress:string;
    registrationDate:Date;
    bikelent:number;
    
    login:Login;
    document:Document;
    location:Location;
    profileimage:Images;

    bike:Bike;



}