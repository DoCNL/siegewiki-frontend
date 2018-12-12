import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Season } from '../season.model';
import { Router } from '@angular/router';
import { SeasonComponent } from '../season.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.css']
})
export class SeasonDetailComponent implements OnInit {

  @Input() season: Season 
  selectedSeason: Season;

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _seasonComp: SeasonComponent,
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSelect(season:Season) : void {
    this.selectedSeason = season;
  }

  deleteSeason() {
    this._backendService.deleteSeason(this.season._id)
    .subscribe(
      res => {
        this._seasonComp.refreshSeasons();
        console.log(res)},
      err => console.log(err)
    )
  }


}