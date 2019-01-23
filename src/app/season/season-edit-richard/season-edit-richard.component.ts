import { Component, OnInit } from '@angular/core';
import { Season } from '../season.model';
import { SeasonComponent } from '../season.component';
import { AuthService } from 'src/app/auth.service';
import { SeasonDetailComponent } from '../season-detail/season-detail.component';
import { SeasonService } from 'src/app/season.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-season-edit-richard',
  templateUrl: './season-edit-richard.component.html',
  styleUrls: ['./season-edit-richard.component.css']
})
export class SeasonEditRichardComponent implements OnInit {

  season: Season;
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
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.showResultBox = false;
    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
      return this._seasonService.getSeasonById(params.id)
        .subscribe(
          res => {
            this.season = res;
            console.log('res:')
            console.log(res);
          },
          err => console.log(err)
        )
    })
  }


  editSeason() {
    if (this._authService.loggedIn) {
      this.sub = this.route.params.subscribe(params => {
        this.seasonEdit = new Season(this.season._id, this.seasonNewName, this.seasonNewDesc, this.seasonNewImg, this.seasonNewYear)
        this._seasonService.editSeason(this.seasonEdit)
          .subscribe(
            res => {
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

  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }
}
