import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formValid } from './formValid';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent {
  fromv = formValid;
  form: any;
  constructor(private router: Router) {
    this.form = new FormGroup({
      // username: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(4),
      //   Validators.pattern('[^\\s]*'),
      // ]),
      // password: new FormControl('', [
      //   Validators.required,
      //   Validators.minLength(4),
      //   Validators.maxLength(10),
      // ]),
      username: this.fromv.username,
      password: this.fromv.password,
    });
    console.log(this.fromv);
  }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  formSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      alert('Login successful');
      this.router.navigate(['/test']);
    } else {
      alert('Something went wrong');
    }
  }
}
