import { Component, OnInit } from '@angular/core';
import { SiegeMap } from './map.model';
import { AuthService } from '../auth.service';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  siegemaps = []
  selectedSiegeMap: SiegeMap;
  emptyMap: SiegeMap;

  constructor(
    private _authService: AuthService,
    private _mapService: MapService
    ) { }

  ngOnInit() {
    return this._mapService.getMaps()
    .subscribe(
      res => this.siegemaps = res,
      err => console.log(err)
    )
  }

  removeSelectedMap(): void {
    this.selectedSiegeMap = this.emptyMap;
  }

  refreshMaps() {
    return this._mapService.getMaps()
    .subscribe(
      res => this.siegemaps = res,
      err => console.log(err)
    )
  }

  onSelect(map:SiegeMap) : void {
    this.selectedSiegeMap = map;
  }
  
}
