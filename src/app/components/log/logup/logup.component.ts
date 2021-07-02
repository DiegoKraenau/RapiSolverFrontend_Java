import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRequestCreate } from 'src/app/models/Service/UserRequestCreate';
import { LogupService } from '../../../services/Rapiservice/logup.service';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {

  constructor(
    private logupService: LogupService,
    private _matSnackbar: MatSnackBar,
  ) { }

  createUser!: FormGroup;
  ngOnInit(): void {
    this.createUser = new FormGroup({
      address: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      state: new FormControl(''),
    });
  }

  createUserRapisolver() {
    if(this.createUser.valid){
      var createBody = new UserRequestCreate();
      createBody.address = this.createUser.get('address')?.value;
      createBody.birthdate= this.createUser.get('birthdate')?.value;
      createBody.city = this.createUser.get('city')?.value;
      createBody.country= this.createUser.get('country')?.value;
      createBody.email= this.createUser.get('email')?.value;
      createBody.firstname = this.createUser.get('firstname')?.value;
      createBody.lastname = this.createUser.get('lastname')?.value;
      createBody.password = this.createUser.get('password')?.value;
      createBody.phone = this.createUser.get('phone')?.value;
      createBody.state = this.createUser.get('state')?.value;

      this.logupService.createUser(createBody).subscribe((response)=>{
        this._matSnackbar.open('Se ha creado su usuario','Aceptar',{
          duration: 100,
        });
      });
      console.log("x",createBody);
    } else {
      this._matSnackbar.open('Rellene los datos correctamente');
    }

  }

}
