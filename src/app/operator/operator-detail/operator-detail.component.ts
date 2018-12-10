import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Operator } from '../operator.model';

@Component({
  selector: 'app-operator-detail',
  templateUrl: './operator-detail.component.html',
  styleUrls: ['./operator-detail.component.css']
})
export class OperatorDetailComponent implements OnInit {

  @Input() operator: Operator 

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
  }

}
