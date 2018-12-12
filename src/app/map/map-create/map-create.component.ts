import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-map-create',
  templateUrl: './map-create.component.html',
  styleUrls: ['./map-create.component.css']
})
export class MapCreateComponent implements OnInit {

  mapCreateData = {};

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this._authGuard.canActivate();
  }

  createMap() {
    this._backendService.createMap(this.mapCreateData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/maps'])
        },
        err => console.log(err)
      )
  
}
}
