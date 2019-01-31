import { Component, OnInit } from '@angular/core';
import { Season } from '../season.model';
import { SeasonComponent } from '../season.component';
import { AuthService } from 'src/app/auth.service';
import { SeasonDetailComponent } from '../season-detail/season-detail.component';
import { SeasonService } from 'src/app/season.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-season-edit-richard',
  templateUrl: './season-edit-richard.component.html',
  styleUrls: ['./season-edit-richard.component.css']
})
export class SeasonEditRichardComponent implements OnInit {

  season: Season;
  sub: any;
  myForm: FormGroup;
  submitResult = ' ';

  constructor(
    private route: ActivatedRoute,
    private _seasonService: SeasonService,
    private _authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
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
    this.myForm = this.fb.group({
      name: '',
      description: '',
      imageLink: '',
      year: [null, [
        Validators.required,
        Validators.min(0),
        Validators.max(5)]]
    });;
  }


  editSeason() {
    if (this._authService.loggedIn) {
      this.sub = this.route.params.subscribe(params => {
        this._seasonService.editSeason(this.myForm.value, params.id)
          .subscribe(
            res => {
              console.log(res)
              this.submitResult = 'Season edited succesfully';
            },
            err => {
              this.submitResult = err.error.Error;
              console.log(err)
            }
          )
      });
    }
  }

  get year() {
    return this.myForm.get('year');
  }

  validateYear() {
    return this.year.hasError('required') ? 'In which year did this season get released?' :
      this.year.hasError('min') ? 'too low' :
        this.year.hasError('max') ? 'too high' :
          '';
  }
}
