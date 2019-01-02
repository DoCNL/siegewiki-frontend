import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
import { OperatorService } from '../operator.service';
import { SeasonService } from '../season.service';
import { Router } from '@angular/router';
import { Season } from '../season/season.model';
import { Operator } from '../operator/operator.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  seasonCreateData = {};
  maps = [];
  operators = [];
  operatorById: Operator;
  seasons = [];
  operatorFromSeasonName: {};
  display: Boolean;
  displayS: Boolean;
  seasonToShow: Season;

  constructor(
    private _operatorService: OperatorService,
    private _mapService: MapService,
    private _seasonService: SeasonService,
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.display = false;
    this.displayS = false;
    return this._operatorService.getOperators()
      .subscribe(
        res => this.operators = res,
        err => console.log(err)
      ),
      this._mapService.getMaps()
        .subscribe(
          res => this.maps = res,
          err => console.log(err)
        ),
      this._seasonService.getSeasons()
        .subscribe(
          res => this.seasons = res,
          err => console.log(err)
        )
  }

  populateSeason() {
    this._seasonService.populateSeason(this.seasonCreateData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/seasons'])
        })
    err => console.log(err)
  }

  isDefault(checkSeason: Season) {
    if (checkSeason.name === 'Default') return false;
    else return true;
  }

  onSelect(season: Season) {
    this.displayS = true;
    this.seasonToShow = season;
    this.display = false;
  }

  seasonHas(operator: any) {
    if (operator.name === null || undefined) return false;
    if (operator._id == this.operatorFromSeasonName) return true;
    else return false;
  }

  findOpById(op: any) {
    return this._operatorService.getOperatorById(op)
      .subscribe(
        res => {
          this.display = true;
          this.operatorById = res;
          console.log(res);
        },
        err => console.log(err)
      )
  }
}
