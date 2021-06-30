export class UserResponse {
    email: string;
    firstname: string;
    id: number;
    lastname: string;
    role: string;

	constructor(email:string,firstname:string,id:number,lastname:string,role:string) {
        this.email=email;
        this.firstname=firstname;
        this.id=id;
        this.lastname=lastname;
        this.role=role;
	}

}