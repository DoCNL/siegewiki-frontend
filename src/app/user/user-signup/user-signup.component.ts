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

  constructor(private _router: Router, private _auth: AuthService) { }

  ngOnInit() {
  }

  signupUser() {
    this._auth.signupUser(this.signupUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/operators'])
        },
        err => console.log(err)
      )
  }
}
