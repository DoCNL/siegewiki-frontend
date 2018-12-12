import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Season } from './season.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  seasons = []
  selectedSeason: Season;

  constructor(
    private _authService: AuthService,
    private _backendService: BackendService
  ) { }

  ngOnInit() {
    return this._backendService.getSeasons()
    .subscribe(
      res => this.seasons = res,
      err => console.log(err)
    )
  }

  refreshSeasons() {
    return this._backendService.getSeasons()
    .subscribe(
      res => this.seasons = res,
      err => console.log(err)
    )
  }

  isDef(sn: Season) {
      if (sn.name === 'Default') return false;
      else return true;
  }

  onSelect(season:Season) : void {
    this.selectedSeason = season
  }

}
