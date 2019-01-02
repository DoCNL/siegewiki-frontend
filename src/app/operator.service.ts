import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operator } from './operator/operator.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user/user.model';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class OperatorService {
    public _operatorsUrl = environment.serverUrl + "/api/operators/";
    public _operatorUrl = environment.serverUrl + "/api/operator/";

    constructor(private http: HttpClient) { }

    getOperators() {
        return this.http.get<any>(this._operatorsUrl);
    }

    getOperator(_id: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                '_id': _id
            })
        };
        return this.http.get<any>(this._operatorUrl, httpOptions);
    }

    getOperatorById(_id: any) {
        return this.http.get<any>(this._operatorUrl + '' + _id);
    }

    createOperator(operator: {}) {
        console.log(operator)
        return this.http.post<any>(this._operatorUrl, operator);
    }

    editOperator(operator: {}) {
        console.log(operator)
        return this.http.put<any>(this._operatorUrl, operator);
    }

    deleteOperator(_id: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                '_id': _id
            })
        };
        return this.http.delete<any>(this._operatorUrl, httpOptions);
    }
}