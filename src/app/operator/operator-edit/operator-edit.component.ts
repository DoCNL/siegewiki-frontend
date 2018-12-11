import { Component, OnInit, Input } from '@angular/core';
import { AuthGuard } from '../../auth.guard';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Operator } from '../operator.model';
import { BackendService } from '../../backend.service';
import { OperatorComponent } from '../operator.component';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-operator-edit',
  templateUrl: './operator-edit.component.html',
  styleUrls: ['./operator-edit.component.css']
})
export class OperatorEditComponent implements OnInit {

  @Input() operator: Operator; 
  operatorEdit;
  operatorNewName = '';
  operatorNewDesc = '';
  operatorNewImg = '';
  operatorNewSide = '';

  constructor(
    private _authGuard: AuthGuard,
    private _router: Router,
    private _backendService: BackendService,
    private _operatorComp: OperatorComponent,
    private _authService: AuthService
    ) { }

  ngOnInit() {
   //this._authGuard.canActivate();
  }

  editOperator() {
  if (this._authService.loggedIn) {
  this.operatorEdit = new Operator( this.operator._id, this.operatorNewName, this.operatorNewDesc, this.operatorNewImg, this.operatorNewSide)
  this._backendService.editOperator(this.operatorEdit)
  .subscribe(
    res => {
      this._operatorComp.refreshOperators();
      console.log(res)},
    err => console.log(err)
  )}
  }

  refresh() {
    this._operatorComp.refreshOperators();
  }

}
