import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from '../validator/noSpace-validator';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css'],
})
export class FormbuilderComponent {
  form: any;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          noSpace.noSpaceValidator,
        ],
      ],
      contactDetails: fb.group({
        adddress: ['', Validators.required],
        shipping: ['', Validators.required],
      }),
      skills: fb.array([]),
    });
  }

  get fc() {
    return this.form.controls;
  }
}
