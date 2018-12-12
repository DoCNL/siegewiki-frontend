import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Operator } from '../operator.model';
import { Router } from '@angular/router';
import { OperatorComponent } from '../operator.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-operator-detail',

  templateUrl: './operator-detail.component.html',
  styleUrls: ['./operator-detail.component.css']
})
export class OperatorDetailComponent implements OnInit {

  @Input() operator: Operator 
  selectedOperator: Operator;
  emptyOp: Operator;

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _operatorComp: OperatorComponent,
    private _authService: AuthService
    ) { }

  ngOnInit() {
  }

  onSelect(operator:Operator) : void {
    this.selectedOperator = operator;
  }

  removeSelectedOp(): void {
    this.selectedOperator = this.emptyOp;
  }
  
  deleteOperator() {
    this._backendService.deleteOperator(this.operator._id)
    .subscribe(
      res => {
        this._operatorComp.refreshOperators();
        console.log(res)},
      err => console.log(err)
    )
  }

}
