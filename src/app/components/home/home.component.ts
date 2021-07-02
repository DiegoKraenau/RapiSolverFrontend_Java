import { Component, OnInit } from '@angular/core';
import { UserRapiService } from 'src/app/models/Service/UserRapiService';
import { ServiceService } from 'src/app/services/Rapiservice/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services?:UserRapiService[];
  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
  }

    getLastestServices(){
    this.serviceService.getLastestServices().subscribe(data=>{this.services=data; console.log(data)},error => {console.log(error);})
  }
}
