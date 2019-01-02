import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Operator } from '../operator.model';
import { OperatorService } from 'src/app/operator.service';

@Component({
  selector: 'app-operator-popout',
  templateUrl: './operator-popout.component.html',
  styleUrls: ['./operator-popout.component.css']
})
export class OperatorPopoutComponent implements OnInit {

  @Input() operator: Operator
  operatorById: Operator;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private _operatorService: OperatorService
    ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
      return this._operatorService.getOperatorById(params.id)
        .subscribe(
          res => {
            this.operatorById = res;
            console.log('res:')
            console.log(res);
          },
          err => console.log(err)
        )
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
