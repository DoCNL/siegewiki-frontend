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
  constructor(private _router: Router, private _auth: AuthService) {  }

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/user/edit'])
        },
        err => console.log(err)
      )
  }
}
