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
  emptySeason: Season;
  displayresult = {};
  showResultBox;

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

  removeSelectedSeason(): void {
    this.selectedSeason = this.emptySeason;
  }

  deleteSeason() {
    this._backendService.deleteSeason(this.season._id)
    .subscribe(
      res => {
        this._seasonComp.refreshSeasons();
        this._seasonComp.removeSelectedSeason();
        console.log(res)
        this.displayresult = {
          result: "success",
          message: "Season was deleted succesfully"
        };
        this.showResult();
      },
      err => console.log(err)
    )
  }
  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }

}
