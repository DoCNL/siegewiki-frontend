import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operator } from './operator/operator.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user/user.model';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    public _userUrl = environment.serverUrl + "/api/user/";

    constructor(private http: HttpClient) { }

    deleteUser(name, pass) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'name': name,
                'password': pass
            })
        };
        return this.http.delete<any>(this._userUrl, httpOptions);
    }

    editUser(name: any, user: {name: any}) {
        console.log(user)
        return this.http.put<any>(this._userUrl + user.name, user);
    }
}