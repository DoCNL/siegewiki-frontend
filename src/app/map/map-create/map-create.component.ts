import { Component, OnInit } from '@angular/core';
import { MapService } from '../../map.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-map-create',
  templateUrl: './map-create.component.html',
  styleUrls: ['./map-create.component.css']
})
export class MapCreateComponent implements OnInit {

  mapCreateData = {};
  displayresult = {};
  showResultBox;

  constructor(
    private _mapService: MapService,
    private _router: Router,
    private _authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this._authGuard.canActivate;
    this.showResultBox = false;
  }

  createMap() {
    this._mapService.createMap(this.mapCreateData)
      .subscribe(
        res => {
          console.log(res)
          this.displayresult = {
            result: "success",
            message: "Map was created succesfully"
          };
          this.showResult();
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
