import { Component, OnInit, Input } from '@angular/core';
import { Operator } from '../operator.model';
import { BackendService } from '../../backend.service';
import { OperatorComponent } from '../operator.component';
import { OperatorDetailComponent } from '../operator-detail/operator-detail.component';
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
    private _backendService: BackendService,
    private _operatorComp: OperatorComponent,
    private _authService: AuthService,
    private _opDetailComp: OperatorDetailComponent
    ) { }

  ngOnInit() {
  }

  editOperator() {
  if (this._authService.loggedIn) {
  this.operatorEdit = new Operator( this.operator._id, this.operatorNewName, this.operatorNewDesc, this.operatorNewImg, this.operatorNewSide)
  this._backendService.editOperator(this.operatorEdit)
  .subscribe(
    res => {
      this._operatorComp.refreshOperators();
      this._opDetailComp.removeSelectedOp();
      this._operatorComp.removeSelectedOp();
      console.log(res)},
    err => console.log(err)
  )}
  }

  cancel() {
    this._opDetailComp.removeSelectedOp();
  }

}
