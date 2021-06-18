import {RapiService} from "./RapiService";

export class UserRapiService{
  id:number;
  detail:String;
  price:number;
  supplierId:number;
  service:RapiService;

  constructor(id:number,detail:String,price:number,supplierId:number,service:RapiService) {
    this.id=id;
    this.detail=detail;
    this.price=price;
    this.supplierId=supplierId;
    this.service=service;
  }
}
