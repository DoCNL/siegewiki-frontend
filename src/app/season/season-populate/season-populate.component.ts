import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';

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
    private _backendService: BackendService,
    private _router: Router
  ) { }

  ngOnInit() {
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
}
