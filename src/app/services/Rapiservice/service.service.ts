import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserRapiService} from "../../models/Service/UserRapiService";
import { environment } from 'src/environments/environment';
import {Category} from "../../models/Service/Category";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url=`${environment.HOST_URL2}/users-services`;
  Url2=`${environment.HOST_URL2}/category`;

  getServices(){
    return this.http.get<UserRapiService[]>(this.Url);
  }

  getLastestServices(){
    return this.http.get<UserRapiService[]>(this.Url+'/last');
  }

  createUserServices (body: any){
    return this.http.post(this.Url, body);
  }

  getCategories(){
    return this.http.get<Category[]>(this.Url2);
  }

}
