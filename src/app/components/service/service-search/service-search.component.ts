import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../../services/Rapiservice/service.service";
import {UserRapiService} from "../../../models/Service/UserRapiService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-service-search',
  templateUrl: './service-search.component.html',
  styleUrls: ['./service-search.component.css']
})
export class ServiceSearchComponent implements OnInit {

  form:FormGroup;

  services?:UserRapiService[];

  constructor(private fb:FormBuilder ,private serviceService:ServiceService) {
    this.form=this.fb.group({
      name:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(){
    this.serviceService.getServices().subscribe(data=>{this.services=data; console.log(data)},error => {console.log(error);})
  }
}
