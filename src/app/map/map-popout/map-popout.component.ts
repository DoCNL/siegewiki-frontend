import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiegeMap } from '../map.model';
import { BackendService } from '../../backend.service';
@Component({
  selector: 'app-map-popout',
  templateUrl: './map-popout.component.html',
  styleUrls: ['./map-popout.component.css']
})
export class MapPopoutComponent implements OnInit {

  @Input() siegemap: SiegeMap 
  siegeMapById: SiegeMap;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private _backendService: BackendService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
    return this._backendService.getMapById(params.id)
      .subscribe(
        res => {
        this.siegeMapById = res;
        console.log('res:')
        console.log(res);
        },
        err => console.log(err)
      )
  })
  }

  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
