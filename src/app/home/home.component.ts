import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { Operator } from 'rxjs';
import { Season } from '../season/season.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  seasonCreateData = {};
  maps = [];
  operators = [];
  seasons = [];
  operatorFromSeasonName: {};
  display: Boolean;
  displayS: Boolean;
  seasonToShow: Season;

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this.display = false;
    this.displayS = false;
    this._authGuard.canActivate();
    return this._backendService.getOperators()
    .subscribe(
      res => this.operators = res,
      err => console.log(err)
    ),
    this._backendService.getMaps()
    .subscribe(
      res => this.maps = res,
      err => console.log(err)
  ),
this._backendService.getSeasons()
.subscribe(
  res => this.seasons = res,
  err => console.log(err)
)
  }

  populateSeason() {
    this._backendService.populateSeason(this.seasonCreateData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/seasons'])})
    err => console.log(err)
  }

  onSelect(season: Season) {
      this.displayS = true;
      this.seasonToShow = season;
  }

  onSelectOp(season: Season) {
    this.display = true;
    this.operatorFromSeasonName = season.siegeoperator;
  }

  seasonHas(operator: any) {
    if (operator.name === null || undefined) return false;
    if (operator._id == this.operatorFromSeasonName) return true;
    else return false;
  }
}
