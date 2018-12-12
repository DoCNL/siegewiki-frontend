import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _signupUrl = "https://siegewikibackend.herokuapp.com/api/user/register/"
  private _loginUrl = "https://siegewikibackend.herokuapp.com/api/user/login"

  constructor(
    private http: HttpClient,
    private _router: Router
    ) { }

  signupUser(user) {
    return this.http.post<any>(this._signupUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/home']);
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
