import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';
import { AuthService } from '../../auth.service';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})

export class UserDeleteComponent implements OnInit {

  deleteUserDataName: string;
  deleteUserDataPass: string;

  constructor(
    private _backendService: BackendService,
    private _authService: AuthService,
    private _authGuard: AuthGuard) {
   }

  ngOnInit() {
    this._authGuard.canActivate;
  }

  deleteUser() {
    this._backendService.deleteUser(this.deleteUserDataName, this.deleteUserDataPass)
    .subscribe(
      res => {
        this._authService.logoutUser()
        console.log(res)},
      err => console.log(err)
    )
  }

}
