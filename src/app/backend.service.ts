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
    //public _operatorUrl = "http://siegewikibackend.herokuapp.com/api/operator/";

    //user urls
    public _userUrl = "http://siegewikibackend.herokuapp.com/api/user/";

    constructor(private http: HttpClient) { }

    //operator http requests
    getOperators() {
        return this.http.get<any>(this._operatorsUrl);
    }
    
    //user http requests
    deleteUser(user) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'name': user.name,
              'password': user.pass
            })
          };
        return this.http.delete<any>(this._userUrl, httpOptions );
    }

    editUser(user) {
        return this.http.put<any>(this._userUrl, user);
    }


}