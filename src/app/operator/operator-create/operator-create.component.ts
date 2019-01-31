import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../../operator.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-operator-create',
  templateUrl: './operator-create.component.html',
  styleUrls: ['./operator-create.component.css']
})
export class OperatorCreateComponent implements OnInit {

  myForm: FormGroup;
  submitResult = ' ';

  constructor(
    private _operatorService: OperatorService,
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
      side: [null, [
        Validators.required]]
    });
  }

  createOperator() {
    this._operatorService.createOperator(this.myForm.value)
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

  get side() {
    return this.myForm.get('side');
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

  validateSide() {
    return this.side.hasError('required') ? 'You must select a side' :
      '';
  }
}
