import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operator } from './operator/operator.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })

export class BackendService {
    public _operatorsUrl = "http://siegewikibackend.herokuapp.com/api/operators/";
    public _operatorUrl = "http://siegewikibackend.herokuapp.com/api/operator/";

    constructor(private http: HttpClient) { }

    getOperators() {
        return this.http.get<any>(this._operatorsUrl)
    }
}