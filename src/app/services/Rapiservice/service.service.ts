import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserRapiService} from "../../models/Service/UserRapiService";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url=`${environment.HOST_URL}/users-services`;

  getServices(){
    return this.http.get<UserRapiService[]>(this.Url);
  }

  getServicesByName(name:string){
    return this.http.get<UserRapiService[]>(this.Url+'/'+name);
  }

  getLastestServices(){
    return this.http.get<UserRapiService[]>(this.Url+'/last');
  }

  createUserServices (body: any){
    return this.http.post(this.Url, body);
  }

}
