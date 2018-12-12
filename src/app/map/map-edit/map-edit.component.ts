import { Component, OnInit, Input } from '@angular/core';
import { SiegeMap } from '../map.model';
import { BackendService } from '../../backend.service';
import { MapComponent } from '../map.component';
import { AuthService } from 'src/app/auth.service';
import { MapDetailComponent } from '../map-detail/map-detail.component';

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent implements OnInit {

  @Input() map: SiegeMap; 
  mapEdit;
  mapNewName = '';
  mapNewDesc = '';
  mapNewImg = '';
  mapNewAv = null;
  
  constructor(
    private _backendService: BackendService,
    private _mapComp: MapComponent,
    private _authService: AuthService,
    private _mapDetailComp: MapDetailComponent
  ) { }

  ngOnInit() {
  }

  editMap() {
    if (this._authService.loggedIn) {
    this.mapEdit = new SiegeMap( this.map._id, this.mapNewName, this.mapNewDesc, this.mapNewImg, this.mapNewAv)
    this._backendService.editMap(this.mapEdit)
    .subscribe(
      res => {
        this._mapComp.refreshMaps();
        console.log(res)},
      err => console.log(err)
    )}
    }
  
    refresh() {
      this._mapComp.refreshMaps();
    }

    cancel() {
      this._mapDetailComp.removeSelectedMap();
    }
}
