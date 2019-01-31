import { Component, OnInit } from '@angular/core';
import { MapService } from '../../map.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-map-create',
  templateUrl: './map-create.component.html',
  styleUrls: ['./map-create.component.css']
})
export class MapCreateComponent implements OnInit {

  myForm: FormGroup;
  submitResult = ' ';

  constructor(
    private _mapService: MapService,
    private _router: Router,
    private _authGuard: AuthGuard,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this._authGuard.canActivate;
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required]],
      description: ['', [
        Validators.required]],
      imageLink: ['', [
        Validators.required]],
      rankedAvailability: [null, [
        Validators.required]]
    });
  }

  createMap() {
    this._mapService.createMap(this.myForm.value)
      .subscribe(
        res => {
          console.log(res)
          this.submitResult = 'Season created succesfully';
        },
        err => {
          this.submitResult = err.error.Error;
          console.log(err)
        }
      )
  }

  get name() {
    return this.myForm.get('name');
  }

  get description() {
    return this.myForm.get('description');
  }

  get imageLink() {
    return this.myForm.get('imageLink');
  }

  get rankedAvailability() {
    return this.myForm.get('rankedAvailability');
  }

  validateName(str: String) {
    return this.name.hasError('required') ? 'You must enter a name' :
      '';
  }

  validateDescription(str: String) {
    return this.description.hasError('required') ? 'You must enter a description' :
      '';
  }

  validateImageLink(str: String) {
    return this.imageLink.hasError('required') ? 'You must enter an image link' :
      '';
  }

  validateRankedAvailability() {
    return this.rankedAvailability.hasError('required') ? 'Is this map available in ranked?' :
      '';
  }

}
