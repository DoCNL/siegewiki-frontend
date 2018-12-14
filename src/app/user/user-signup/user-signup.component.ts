import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  signupUserData = {};
  displayresult = {};
  showResultBox;
  msg;

  constructor(private _router: Router, private _auth: AuthService) { }

  ngOnInit() {
    this.showResultBox = false;
  }

  signupUser() {
    this._auth.signupUser(this.signupUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/user'])
        },
        err => {
          console.log(err);
          if (err.status === 500) this.msg = "Please provide a username of at least 3 characters and a password."
          if (err.status === 401) this.msg = JSON.stringify(err.error.Error)
          this.displayresult = {
            result: "Failed",
            message: this.msg
          };
          this.showResult();
        }
      )
  } 

  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }
}
