import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeasonService } from 'src/app/season.service';

@Component({
  selector: 'app-season-createform',
  templateUrl: './season-createform.component.html',
  styleUrls: ['./season-createform.component.css']
})
export class SeasonCreateformComponent implements OnInit {

  myForm: FormGroup;
  submitResult = ' ';

  constructor(
    private _seasonService: SeasonService,
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
      year: [null, [
        Validators.required,
        Validators.min(0),
        Validators.max(5)]]
    });
  }

  createSeason() {
    this._seasonService.createSeason(this.myForm.value)
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

  get year() {
    return this.myForm.get('year');
  }

  validateYear() {
    return this.year.hasError('required') ? 'In which year did this season get released?' :
      this.year.hasError('min') ? 'too low' :
        this.year.hasError('max') ? 'too high' :
          '';
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
}
