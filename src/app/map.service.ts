import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operator } from './operator/operator.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user/user.model';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class MapService {
    public _mapsUrl = environment.serverUrl + "/api/siegemaps/";
    public _mapUrl = environment.serverUrl + "/api/siegemap/";

    constructor(private http: HttpClient) { }

    getMaps() {
        return this.http.get<any>(this._mapsUrl);
    }

    getMapById(_id: any) {
        console.log(this._mapUrl + '' + _id)
        return this.http.get<any>(this._mapUrl + '' + _id);
    }

    createMap(map: {}) {
        console.log(map)
        return this.http.post<any>(this._mapUrl, map);
    }

    editMap(map: {}) {
        console.log(map)
        return this.http.put<any>(this._mapUrl, map);
    }

    deleteMap(_id: any) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                '_id': _id
            })
        };
        return this.http.delete<any>(this._mapUrl, httpOptions);
    }
}