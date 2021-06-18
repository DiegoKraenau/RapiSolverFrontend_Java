import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../../services/Rapiservice/service.service";
import {UserRapiService} from "../../../models/Service/UserRapiService";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services?:UserRapiService[];

  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(data=>{this.services=data; console.log(data)},error => {console.log(error);})
  }

}
