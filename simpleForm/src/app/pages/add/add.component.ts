import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service/service.service';
import { Form } from './add';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  obj : Form = new Form (new FormBuilder())
  
  constructor(private service : ServiceService){
  }

  addData() {
   if(this.obj.myForm.valid){
    this.service.addData({
      fullname: this.obj.myForm.get('fullname')?.value,
      phone: this.obj.myForm.get('phone')?.value,
      details: this.obj.myForm.get('details')?.value
    })
    this.obj.myForm.get('fullname')?.reset()
    this.obj.myForm.get('phone')?.reset()
    this.obj.myForm.get('details')?.reset()
  }
}
}
