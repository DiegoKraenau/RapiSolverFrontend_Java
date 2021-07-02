import {RapiService} from "./RapiService";
import {Supplier} from "./Supplier";

export class UserRapiService{
  id:number;
  detail:String;
  price:number;
  supplierId:Supplier;
  service:RapiService;

  constructor(id:number,detail:String,price:number,supplierId:Supplier,service:RapiService) {
    this.id=id;
    this.detail=detail;
    this.price=price;
    this.supplierId=supplierId;
    this.service=service;
  }
}
