import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginUserData = {};
  displayresult = {};
  showResultBox;

  constructor(
    private _router: Router,
    private _auth: AuthService
  ) { }

  ngOnInit() {
    this.showResultBox = false;
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/user/'])
        },
        err => {
          console.log(err);
          this.displayresult = {
            result: "Failed",
            message: "Invalid credentials."};
              //message: JSON.stringify(err.error.err.errors.name.message)};
          this.showResult();}
      )
  }

  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }
}
