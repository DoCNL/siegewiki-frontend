import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../operator.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-operator-create',
  templateUrl: './operator-create.component.html',
  styleUrls: ['./operator-create.component.css']
})
export class OperatorCreateComponent implements OnInit {

  operatorCreateData = {};
  displayresult = {};
  showResultBox;

  constructor(
    private _operatorService: OperatorService,
    private _router: Router,
    private _authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this._authGuard.canActivate;
    this.showResultBox = false;
  }

  createOperator() {
      this._operatorService.createOperator(this.operatorCreateData)
        .subscribe(
          res => {
            console.log(res)
            this.displayresult = {
              result: "success",
              message: "Operator was created succesfully"
            };
          },
          err => console.log(err)
        )
    
  }

  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }
}
