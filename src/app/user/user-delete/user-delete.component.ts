import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AuthGuard } from '../../auth.guard';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})

export class UserDeleteComponent implements OnInit {

  deleteUserDataName: string;
  deleteUserDataPass: string;

  constructor(
    private _userService: UserService,
    private _authService: AuthService,
    private _authGuard: AuthGuard) {
   }

  ngOnInit() {
    this._authGuard.canActivate;
  }

  deleteUser() {
    this._userService.deleteUser(this.deleteUserDataName, this.deleteUserDataPass)
    .subscribe(
      res => {
        this._authService.logoutUser()
        console.log(res)},
      err => console.log(err)
    )
  }

}
