import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../season.model';
import { SeasonComponent } from '../season.component';
import { AuthService } from 'src/app/auth.service';
import { SeasonDetailComponent } from '../season-detail/season-detail.component';
import { SeasonService } from 'src/app/season.service';
import { ActivatedRoute } from '@angular/router';

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
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private _seasonService: SeasonService,
    private _seasonComp: SeasonComponent,
    private _authService: AuthService,
    private _seasonDetailComp: SeasonDetailComponent
  ) { }

  ngOnInit() {
    this.showResultBox = false;
  }

  editSeason() {
    if (this._authService.loggedIn) {
      this.sub = this.route.params.subscribe(params => {
        this.seasonEdit = new Season(this.season._id, this.seasonNewName, this.seasonNewDesc, this.seasonNewImg, this.seasonNewYear)
        this._seasonService.editSeason(this.seasonEdit, this.season._id)
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
      });
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
