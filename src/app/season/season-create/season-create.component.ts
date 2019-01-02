import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { SeasonService } from 'src/app/season.service';

@Component({
  selector: 'app-season-create',
  templateUrl: './season-create.component.html',
  styleUrls: ['./season-create.component.css']
})
export class SeasonCreateComponent implements OnInit {

  seasonCreateData = {};
  displayresult = {};
  showResultBox;

  constructor(
    private _seasonService: SeasonService,
    private _router: Router,
    private _authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this._authGuard.canActivate;
    this.showResultBox = false;
  }

  createSeason() {
    this._seasonService.createSeason(this.seasonCreateData)
      .subscribe(
        res => {
          console.log(res)
          this.displayresult = {
            result: "success",
            message: "Season was created succesfully"
          };
          this.showResult();
        },
        err => {
          console.log(err);
          this.displayresult = {
            result: "Failed",
            message: JSON.stringify(err.error.err.errors.name.message)
          };
          //message: JSON.stringify(err.error.err.errors.name.message)};
          this.showResult();
        }
      )
  }
  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }

}