import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Season } from '../season.model';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-season-popout',
  templateUrl: './season-popout.component.html',
  styleUrls: ['./season-popout.component.css']
})
export class SeasonPopoutComponent implements OnInit {

  @Input() season: Season 
  seasonById: Season;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private _backendService: BackendService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
    return this._backendService.getSeasonById(params.id)
      .subscribe(
        res => {
        this.seasonById = res;
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
