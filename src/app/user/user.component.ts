import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _authGuard: AuthGuard,) { }

  ngOnInit() {
    this._authGuard.canActivate();
  }

}
