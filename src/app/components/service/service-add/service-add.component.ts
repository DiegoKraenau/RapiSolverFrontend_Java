import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../../../services/Rapiservice/service.service";
import {RapiServiceRequestCreate} from "../../../models/Service/RapiServiceRequestCreate";
import {Category} from "../../../models/Service/Category";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {



  constructor(private serviceService:ServiceService,private _matSnackbar: MatSnackBar) {
  }
  createForm!: FormGroup;
  categories?: Category[];
  ngOnInit(): void  {
    this.getcategories();
    this.createForm= new FormGroup({
      nombre: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      costo: new FormControl('',[Validators.required]),
      categoria: new FormControl('',[Validators.required])
    });
  }

  createService(){
    if(this.createForm.valid){
      var createBody=new RapiServiceRequestCreate(this.createForm.get('nombre')?.value,this.createForm.get('description')?.value,this.createForm.get('costo')?.value,this.createForm.get('categoria')?.value,2);
      var createBody2=new RapiServiceRequestCreate("Limpieza","Asi es 3",123,"Mantenimiento",2);
      this.serviceService.createUserServices(createBody).subscribe((response)=>{this._matSnackbar.open("se ha creado el servicio","aceptar",{duration:100})},error => {console.log(error);});
    }
  }

  getcategories(){
    this.serviceService.getCategories().subscribe(data=>{this.categories=data; console.log(data)},error => {console.log(error);})
  }




}
