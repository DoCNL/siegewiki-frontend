import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-operator-create',
  templateUrl: './operator-create.component.html',
  styleUrls: ['./operator-create.component.css']
})
export class OperatorCreateComponent implements OnInit {

  operatorCreateData = {};

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this._authGuard.canActivate();
  }

  createOperator() {
      this._backendService.createOperator(this.operatorCreateData)
        .subscribe(
          res => {
            console.log(res)
            this._router.navigate(['/operators'])
          },
          err => console.log(err)
        )
    
  }

}
