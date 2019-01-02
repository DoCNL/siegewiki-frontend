import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../auth.guard';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userEditData = {};

  constructor( 
    private _userService: UserService,
    private _authGuard: AuthGuard
    ) { }

  ngOnInit() {
    this._authGuard.canActivate;
  }

  displayEditName() {
    if (this.userEditData === {}) return false;
    else return true;
  }

  editUser() {
    //console.log(this.userEditData)
    this._userService.editUser(this.userEditData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
