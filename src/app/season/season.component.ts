import { Component, OnInit } from '@angular/core';
import { Season } from './season.model';
import { AuthService } from '../auth.service';
import { SeasonService } from '../season.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  seasons = []
  selectedSeason: Season;
  emptySeason: Season;
  
  constructor(
    private _authService: AuthService,
    private _seasonService: SeasonService
  ) { }

  ngOnInit() {
    return this._seasonService.getSeasons()
    .subscribe(
      res => {
        console.log(res)
        this.seasons = res},
      err => console.log(err)
    )
  }

  refreshSeasons() {
    return this._seasonService.getSeasons()
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

  removeSelectedSeason(): void {
    this.selectedSeason = this.emptySeason;
  }

}
