import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../auth.guard';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operator-edit',
  templateUrl: './operator-edit.component.html',
  styleUrls: ['./operator-edit.component.css']
})
export class OperatorEditComponent implements OnInit {

  constructor(
    private _authGuard: AuthGuard,
    private _router: Router
    ) { }

  ngOnInit() {
   this._authGuard.canActivate();
  }

}
