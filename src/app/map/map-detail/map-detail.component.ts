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
  emptyMap: SiegeMap;
  displayresult = {};
  showResultBox;

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _mapComp: MapComponent,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.showResultBox = false;
  }

  onSelect(map:SiegeMap) : void {
    this.selectedMap = map
  }

  deleteMap() {
    this._backendService.deleteMap(this.map._id)
    .subscribe(
      res => {
        this._mapComp.refreshMaps();
        this._mapComp.removeSelectedMap();
        console.log(res)
        this.displayresult = {
          result: "success",
          message: "Map was deleted succesfully"
        };
        this.showResult();
      },
      err => console.log(err)
    )
  }

  removeSelectedMap(): void {
    this.selectedMap = this.emptyMap;
  }

   showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  } 

}
