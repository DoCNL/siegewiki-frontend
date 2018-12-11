import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operator } from './operator/operator.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user/user.model';

@Injectable({
    providedIn: 'root'
  })

export class BackendService {
    //operator urls
    public _operatorsUrl = "http://siegewikibackend.herokuapp.com/api/operators/";
    public _operatorUrl = "http://siegewikibackend.herokuapp.com/api/operator/";

    //user urls
    public _userUrl = "http://siegewikibackend.herokuapp.com/api/user/";

    constructor(private http: HttpClient) { }

    //operator http requests
    getOperators() {
        return this.http.get<any>(this._operatorsUrl);
    }
    
    //user http requests
    deleteUser(name, pass ) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'name': name,
              'password': pass
            })
          };
        return this.http.delete<any>(this._userUrl, httpOptions );
    }

    editUser(user: {}) {
        console.log(user)
        return this.http.put<any>(this._userUrl, user);
    }

    //operator http requests
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
          'Content-Type':  'application/json',
          '_id': _id
        })
      };
    return this.http.delete<any>(this._operatorUrl, httpOptions );
    }

}