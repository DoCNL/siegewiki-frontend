import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { SiegeMap } from './map.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  siegemaps = []
  selectedSiegeMap: SiegeMap;

  constructor(
    private _authService: AuthService,
    private _backendService: BackendService
    ) { }

  ngOnInit() {
    return this._backendService.getMaps()
    .subscribe(
      res => this.siegemaps = res,
      err => console.log(err)
    )
  }

  refreshMaps() {
    return this._backendService.getMaps()
    .subscribe(
      res => this.siegemaps = res,
      err => console.log(err)
    )
  }


  onSelect(map:SiegeMap) : void {
    this.selectedSiegeMap = map;
  }
}
