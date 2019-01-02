import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { SeasonService } from 'src/app/season.service';
import { OperatorService } from 'src/app/operator.service';
import { MapService } from 'src/app/map.service';

@Component({
  selector: 'app-season-populate',
  templateUrl: './season-populate.component.html',
  styleUrls: ['./season-populate.component.css']
})
export class SeasonPopulateComponent implements OnInit {

  seasonCreateData = {};
  maps = [];
  operators = [];
  seasons = [];

  constructor(
    private _seasonService: SeasonService,
    private _operatorService: OperatorService,
    private _mapService: MapService,
    private _router: Router,
    private _authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this._authGuard.canActivate;
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
          this._router.navigate(['/seasons'])})
    err => console.log(err)
  }
}
