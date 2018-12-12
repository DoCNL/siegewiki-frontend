import { Component, OnInit,  Input} from '@angular/core';
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
  @Input() importOp: Operator;
  searchOp: string;
  emptyOp: Operator;

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

  removeSelectedOp(): void {
    this.selectedOperator = this.emptyOp;
  }

  onSelect(operator:Operator) : void {
    this.selectedOperator = operator
  }

  isPopOp(operator: Operator) {
    if (this.importOp === undefined) return true;
    var listname = operator.name
    var searchname = this.searchOp
    console.log(listname + searchname)
    if (listname.includes(searchname)) {
      this.refreshOperators();
      return true;
      } else return false;
  }

  search() {
    this.refreshOperators();
  }
}
