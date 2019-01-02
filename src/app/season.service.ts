import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operator } from './operator/operator.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './user/user.model';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class SeasonService {
    public _seasonsUrl = environment.serverUrl + "/api/seasons/";
    public _seasonUrl = environment.serverUrl + "/api/season/";

    constructor(private http: HttpClient) { }

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