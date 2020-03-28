import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerUrl = 'http://localhost:61946/api/user/';
  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post(`${this.registerUrl}${'adduser'}`, user);
  }

  login(user: User): Observable<any> {
    return this.http.post(`${this.registerUrl}${'login'}`, user);
  }
}
