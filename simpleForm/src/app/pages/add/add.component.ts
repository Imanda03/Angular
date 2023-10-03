import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  form: any;
  constructor(private service: ServiceService, fb: FormBuilder) {
    this.form = fb.group({
      fullname: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      details: ['', [Validators.required]],
      // skills: fb.array([]),
    });
  }

  get fc() {
    return this.form.controls;
  }

  // addSkills(skill: any) {
  //   this.fc.skills.push(skill.value);
  //   skill.value = '';
  //   console.log(this.form.value);
  // }

  // removeSkill(index: any) {
  //   this.fc.skills.removeAt(index);
  // }

  addData() {
    // let anyType: any;
    // anyType = this.fc.value;
    this.service.addData(this.fc);
    // console.log(this.fc);
    console.log(this.service.userDetails);
  }
}
