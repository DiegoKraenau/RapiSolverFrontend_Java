export class UserRequestCreate {
  address: string;
  birthdate: string;
  city: string;
  country: string;
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  phone: string;
  state: string;

  constructor(){
    this.address="";
    this.birthdate="";
    this.city="";
    this.country="";
    this.email="";
    this.firstname="";
    this.lastname="";
    this.password="";
    this.phone="";
    this.state="";
  }
}
