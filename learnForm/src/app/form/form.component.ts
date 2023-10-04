import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Home } from './form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
   obj: Home = new Home(new FormBuilder());
    ngOnInit() {
        console.log(this.obj.myForm)
    }
    onSubmit() {
        if (this.obj.myForm.valid) {
            console.log('Form value:', this.obj);
            this.obj.name = this.obj.myForm.get('name')?.value;
            this.obj.rollNo = this.obj.myForm.get('rollNo')?.value;
            // console.log('Name control validity:', this.obj.myForm.get('name')?.valid);
            // console.log('Name control touched:', this.obj.myForm.get('name')?.touched);
        }
    }
}
