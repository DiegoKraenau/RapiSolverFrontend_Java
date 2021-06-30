import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../../models/Service/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Url: string = `${environment.HOST_URL}/user/`;

  constructor(private http: HttpClient) { }

  getUserPerfil(id: string) {
    return this.http.get<UserResponse>(this.Url + '/'+id);
  }
}
