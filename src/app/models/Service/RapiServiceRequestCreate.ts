export class RapiServiceRequestCreate {
    detail: string;
    price: number;
    serviceName: string;
    categoryName: string;
    supplierId: number;


	constructor(serviceName: string,detail: string,price: number,categoryName: string,supplierId:number) {
        this.detail=detail;
        this.price=price;
        this.serviceName=serviceName;
        this.categoryName=categoryName;
        this.supplierId=supplierId;
	}

}
