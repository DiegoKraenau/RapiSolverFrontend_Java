import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../../../services/Rapiservice/service.service";

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder ,private serviceService:ServiceService) {
    this.form=this.fb.group({
      name:['',Validators.required],
      description:['',Validators.required],
      costo:['',Validators.required],
      categoria:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }



}
