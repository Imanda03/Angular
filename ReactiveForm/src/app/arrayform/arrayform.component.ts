import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-arrayform',
  templateUrl: './arrayform.component.html',
  styleUrls: ['./arrayform.component.css'],
})
export class ArrayformComponent {
  form: any;
  constructor() {
    this.form = new FormGroup({
      skills: new FormArray([]),
    });
  }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  addSkills(skill: HTMLInputElement) {
    this.skills.push(new FormControl(skill.value));
    skill.value = '';
    console.log(this.form.value);
  }

  removeSkill(index: any) {
    this.skills.removeAt(index);
  }
}
