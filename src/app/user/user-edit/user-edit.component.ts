import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../auth.guard';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userEditData = { name: ''};
  private sub: any;
  private paramname: any;

  constructor( 
    private route: ActivatedRoute,
    private _userService: UserService,
    private _authGuard: AuthGuard
    ) { }

  ngOnInit() {
    this._authGuard.canActivate;
    this.sub = this.route.params.subscribe(params => {
      console.log(params['name']);
      this.paramname = params.name;
    });
  }

  displayEditName() {
    if (this.userEditData === { name: ''}) return false;
    else return true;
  }

  editUser() {
    this._userService.editUser(this.paramname, this.userEditData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
