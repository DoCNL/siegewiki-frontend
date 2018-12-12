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

  constructor(
    private _backendService: BackendService,
    private _seasonComp: SeasonComponent,
    private _authService: AuthService,
    private _seasonDetailComp: SeasonDetailComponent
  ) { }

  ngOnInit() {
  }

  editSeason() {
    if (this._authService.loggedIn) {
    this.seasonEdit = new Season( this.season._id, this.seasonNewName, this.seasonNewDesc, this.seasonNewImg, this.seasonNewYear)
    this._backendService.editSeason(this.seasonEdit)
    .subscribe(
      res => {
        this._seasonComp.refreshSeasons();
        console.log(res)},
      err => console.log(err)
    )}
    }

    refresh() {
      this._seasonComp.refreshSeasons();
    }

    cancel() {
      this._seasonDetailComp.removeSelectedSeason();
    }
}
