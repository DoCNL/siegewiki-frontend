import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../backend.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-season-create',
  templateUrl: './season-create.component.html',
  styleUrls: ['./season-create.component.css']
})
export class SeasonCreateComponent implements OnInit {

  seasonCreateData = {};
  displayresult = {};
  showResultBox;

  constructor(
    private _backendService: BackendService,
    private _router: Router,
    private _authGuard: AuthGuard
  ) { }

  ngOnInit() {
    this._authGuard.canActivate();
    this.showResultBox = false;
  }

  createSeason() {
    this._backendService.createSeason(this.seasonCreateData)
      .subscribe(
        res => {
          console.log(res)
          this.displayresult = {
            result: "success",
            message: "Season was created succesfully"};
          this.showResult();
        },
        err => {
          console.log(err);
          this.displayresult = {
            result: "Failed",
            message: JSON.stringify(err.error.err.errors.name.message)};
              //message: JSON.stringify(err.error.err.errors.name.message)};
          this.showResult();
        }
      )
  }
  showResult() {
    this.showResultBox = true;
    setTimeout(() => {
      this.showResultBox = false;
    }, 5000);
  }

}

// ​err.error.err.
// error: {…}
// ​​
// err: {…}
// ​​​
// _message: "season validation failed"
// ​​​
// errors: {…}
// ​​​​
// name: {…}
// ​​​​​
// kind: "required"
// ​​​​​
// message: "Season name is required."
// ​​​​​
// name: "ValidatorError"
// ​​​​​
// path: "name"
// ​​​​​
// properties: Object { message: "Season name is required.", type: "required", path: "name" }