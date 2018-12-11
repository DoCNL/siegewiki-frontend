import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../auth.guard';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})

export class UserDeleteComponent implements OnInit {

  deleteUserDataName: string;
  deleteUserDataPass: string;

  constructor(
    private _authGuard: AuthGuard,
    private _backendService: BackendService) {
   }

  ngOnInit() {
    this._authGuard.canActivate();
  }

  deleteUser() {
    this._backendService.deleteUser(this.deleteUserDataName, this.deleteUserDataPass)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
