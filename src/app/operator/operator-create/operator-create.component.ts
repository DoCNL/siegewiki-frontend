import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';

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
    private _backendService: BackendService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.showResultBox = false;
  }

  createOperator() {
      this._backendService.createOperator(this.operatorCreateData)
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
