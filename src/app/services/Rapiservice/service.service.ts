import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserRapiService} from "../../models/Service/UserRapiService";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8087/api/v1/users-services';

  getServices(){
    return this.http.get<UserRapiService[]>(this.Url);
  }

}
