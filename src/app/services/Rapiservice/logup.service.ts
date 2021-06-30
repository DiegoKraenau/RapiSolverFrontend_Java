import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogupService {

  Url: string = `${environment.HOST_URL}/user/customer` 

  constructor(private http: HttpClient) {}

  createUser(body: any) {
    return this.http.post(this.Url, body);
  }
}
