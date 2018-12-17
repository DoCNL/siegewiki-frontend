import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';

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
    private _backendService: BackendService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.showResultBox = false;
  }

  createMap() {
    this._backendService.createMap(this.mapCreateData)
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
