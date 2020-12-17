import { Login } from "./Login.model";
import { Images } from "./Images.model";
import { Document } from "./Document.model";
import { Address } from "./Address.model";

export class Customer{

    customerId:number;
    customerName:string;
    customerEmail:String;
    aadharId:number;
    licenseNo:string;
    walleteBalance:number;
    address:Address;
    login:Login;
    image:string;
    document:Document[];
}