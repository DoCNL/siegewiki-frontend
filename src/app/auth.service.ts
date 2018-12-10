import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _signupUrl = "http://siegewikibackend.herokuapp.com/api/user/register/"
  private _loginUrl = "http://siegewikibackend.herokuapp.com/api/user/login"

  constructor(private http: HttpClient) { }

  signupUser(user) {
    return this.http.post<any>(this._signupUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }
}
