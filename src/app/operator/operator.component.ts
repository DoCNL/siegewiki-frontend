import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Operator } from './operator.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  operators = []
  selectedOperator: Operator;

  constructor(
    private _authService: AuthService,
    private _backendService: BackendService
    ) { }

  ngOnInit() {
    return this._backendService.getOperators()
    .subscribe(
      res => this.operators = res,
      err => console.log(err)
    )
  }

  refreshOperators() {
    return this._backendService.getOperators()
    .subscribe(
      res => this.operators = res,
      err => console.log(err)
    )
  }

  onSelect(operator:Operator) : void {
    this.selectedOperator = operator
  }
}
