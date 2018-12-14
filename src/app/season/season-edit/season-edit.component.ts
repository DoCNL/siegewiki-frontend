import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../season.model';
import { BackendService } from '../../backend.service';
import { SeasonComponent } from '../season.component';
import { AuthService } from 'src/app/auth.service';
import { SeasonDetailComponent } from '../season-detail/season-detail.component';

@Component({
  selector: 'app-season-edit',
  templateUrl: './season-edit.component.html',
  styleUrls: ['./season-edit.component.css']
})
export class SeasonEditComponent implements OnInit {

  @Input() season: Season;
  seasonEdit;
  seasonNewName = '';
  seasonNewDesc = '';
  seasonNewImg = '';
  seasonNewYear = 0;
  displayresult = {};
  showResultBox;

  constructor(
    private _backendService: BackendService,
    private _seasonComp: SeasonComponent,
    private _authService: AuthService,
    private _seasonDetailComp: SeasonDetailComponent
  ) { }

  ngOnInit() {
    this.showResultBox = false;
  }

  editSeason() {
    if (this._authService.loggedIn) {
      this.seasonEdit = new Season(this.season._id, this.seasonNewName, this.seasonNewDesc, this.seasonNewImg, this.seasonNewYear)
      this._backendService.editSeason(this.seasonEdit)
        .subscribe(
          res => {
            this._seasonComp.refreshSeasons();
            console.log(res)
            this.cancel();
            this._seasonComp.removeSelectedSeason();
            this.displayresult = {
              result: "success",
              message: "Season " + this.season.name + " was edited succesfully"
            };
            this.showResult();
          },
          err => {
            console.log(err);
            this.displayresult = {
              result: "Failed",
              message: JSON.stringify(err.error.err.errors.description.message)
            };
            this.showResult();
          }
        )
    }
  }

  refresh() {
    this._seasonComp.refreshSeasons();
  }

  cancel() {
    this._seasonDetailComp.removeSelectedSeason();
  }

  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }
}

