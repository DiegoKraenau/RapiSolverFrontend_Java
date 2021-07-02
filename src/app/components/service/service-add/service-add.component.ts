import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../../../services/Rapiservice/service.service";
import {RapiServiceRequestCreate} from "../../../models/Service/RapiServiceRequestCreate";
import {Category} from "../../../models/Service/Category";

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {



  constructor(private serviceService:ServiceService) {
    nombre: new FormControl('',[Validators.required]);
      description: new FormControl('',[Validators.required]);
      costo: new FormControl('',[Validators.required]);
      categoria: new FormControl('',[Validators.required]);

    this.createForm= new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      costo: new FormControl('',[Validators.required]),
      categoria: new FormControl('',[Validators.required])
    });
  }
  createForm: FormGroup;
  categories?: Category[];
  ngOnInit(): void  {
    this.getcategories();
  }

  getcategories(){
    this.serviceService.getCategories().subscribe(data=>{this.categories=data; console.log(data)},error => {console.log(error);})
  }




}
