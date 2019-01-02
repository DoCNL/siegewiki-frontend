import { Component, OnInit, Input } from '@angular/core';
import { Operator } from '../operator.model';
import { Router } from '@angular/router';
import { OperatorComponent } from '../operator.component';
import { AuthService } from '../../auth.service';
import { OperatorService } from 'src/app/operator.service';

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
    private _operatorService: OperatorService,
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
    this._operatorService.deleteOperator(this.operator._id)
    .subscribe(
      res => {
        this._operatorComp.refreshOperators();
        this._operatorComp.removeSelectedOp();
        console.log(res)},
      err => console.log(err)
    )
  }

}
