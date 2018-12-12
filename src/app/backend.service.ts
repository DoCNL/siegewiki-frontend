import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operator } from './operator/operator.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user/user.model';

@Injectable({
    providedIn: 'root'
  })

export class BackendService {
    
    //user urls
    public _userUrl = "http://siegewikibackend.herokuapp.com/api/user/";

    //operator urls
    public _operatorsUrl = "http://siegewikibackend.herokuapp.com/api/operators/";
    public _operatorUrl = "http://siegewikibackend.herokuapp.com/api/operator/";

    //map urls
    public _mapsUrl = "http://siegewikibackend.herokuapp.com/api/siegemaps/";
    public _mapUrl = "http://siegewikibackend.herokuapp.com/api/siegemap/";

    //season urls
    public _seasonsUrl = "http://siegewikibackend.herokuapp.com/api/seasons/";
    public _seasonUrl = "http://siegewikibackend.herokuapp.com/api/season/";

    constructor(private http: HttpClient) { }
    
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
    getOperators() {
        return this.http.get<any>(this._operatorsUrl);
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
          'Content-Type':  'application/json',
          '_id': _id
        })
      };
    return this.http.delete<any>(this._operatorUrl, httpOptions );
    }

    //map http requests
    getMaps() {
        return this.http.get<any>(this._mapsUrl);
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
              'Content-Type':  'application/json',
              '_id': _id
            })
          };
        return this.http.delete<any>(this._mapUrl, httpOptions );
        }

    //season http requests
    getSeasons() {
        return this.http.get<any>(this._seasonsUrl);
    }

    createSeason(season: {}) {
        console.log(season)
        return this.http.post<any>(this._seasonUrl, season);
    }

    editSeason(season: {}) {
        console.log(season)
        return this.http.put<any>(this._seasonUrl, season);
    }

    deleteSeason(_id: any) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              '_id': _id
            })
          };
        return this.http.delete<any>(this._seasonUrl, httpOptions );
    }

    populateSeason(season: any) {
        console.log(season)
        return this.http.put<any>(this._seasonUrl + 'populate/', season);
    }
}