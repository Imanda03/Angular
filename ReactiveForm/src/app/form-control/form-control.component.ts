import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent {


  onSubmit(f:any){
    console.log(f)
  }

  getValue(f:any){
    console.log(f)
  }
}


