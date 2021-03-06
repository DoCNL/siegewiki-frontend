import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operator } from './operator/operator.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user/user.model';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class BackendService {
    
    //user urls
    public _userUrl = environment.serverUrl + "/api/user/";

    //operator urls
    public _operatorsUrl = environment.serverUrl + "/api/operators/";
    public _operatorUrl = environment.serverUrl + "/api/operator/";

    //map urls
    public _mapsUrl = environment.serverUrl + "/api/siegemaps/";
    public _mapUrl = environment.serverUrl + "/api/siegemap/";

    //season urls
    public _seasonsUrl = environment.serverUrl + "/api/seasons/";
    public _seasonUrl = environment.serverUrl + "/api/season/";

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

    getOperator(_id: any) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
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

    getSeasonsPop() {
        return this.http.get<any>(this._seasonsUrl  + 'populate');
    }

    getSeasonById(_id: any) {
        return this.http.get<any>(this._seasonUrl + _id);
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