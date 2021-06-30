export class UserRequestCreate {
    address: String;
    birthdate: Date;
    city: String;
    country: String;
    email: String;
    firstname: String;
    password: String;
    phone: String;
    state: String;

    constructor(address:string, birthdate:Date,city:String,country:String,email:String,firstname:String,password:String,phone:String,state:String){
        this.address=address;
        this.birthdate=birthdate;
        this.city=city;
        this.country=country;
        this.email=email;
        this.firstname=firstname;
        this.password=password;
        this.phone=phone;
        this.state=state;
    }
}
