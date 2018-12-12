import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from '../../backend.service';
import { SiegeMap } from '../map.model';
import { Router } from '@angular/router';
import { MapComponent } from '../map.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.css']
})
export class MapDetailComponent implements OnInit {

  @Input() map: SiegeMap 
  selectedMap: SiegeMap;

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _mapComp: MapComponent,
    private _authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSelect(map:SiegeMap) : void {
    this.selectedMap = map
  }

  deleteMap() {
    this._backendService.deleteMap(this.map._id)
    .subscribe(
      res => {
        this._mapComp.refreshMaps();
        console.log(res)},
      err => console.log(err)
    )
  }

}
