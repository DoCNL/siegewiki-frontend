import { Component, OnInit } from '@angular/core';
import { Season } from '../season.model';
import { AuthService } from 'src/app/auth.service';
import { SeasonService } from 'src/app/season.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-season-delete',
  templateUrl: './season-delete.component.html',
  styleUrls: ['./season-delete.component.css']
})
export class SeasonDeleteComponent implements OnInit {

  season: {name: '', _id: ''};
  displayresult = {};
  showResultBox;
  sub: any;

  constructor(
    private route: ActivatedRoute,
    private _seasonService: SeasonService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.showResultBox = false;
    this.sub = this.route.params.subscribe(params => {
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

  deleteSeason() {
    this._seasonService.deleteSeason(this.season._id)
    .subscribe(
      res => {
        console.log(res)
        this.displayresult = {
          result: "success",
          message: "Season was deleted succesfully"
        };
        this.showResult();
        this._router.navigate(['/seasons'])
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
