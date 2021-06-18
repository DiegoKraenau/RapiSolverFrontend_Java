import {Category} from "./Category";

export class RapiService{
  id:number;
  name:String;
  category:Category;

  constructor(id:number,name:String,category:Category){
    this.id=id;
    this.name=name;
    this.category=category;
  }
}
