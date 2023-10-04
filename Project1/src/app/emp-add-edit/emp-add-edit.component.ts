import { Component } from '@angular/core';
import {FormGroup , FormBuilder} from '@angular/forms'
import { EmployeeService } from '../services/employee.service';
import {DialogRef} from '@angular/cdk/dialog'

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
  empForm: FormGroup

  constructor(private fb : FormBuilder, private eservice : EmployeeService, private dRef : DialogRef<EmpAddEditComponent>){
    this.empForm = this.fb.group({
       firstname: ['',],
       lastname: [''],
       email: [''],
       phone: [''],
       gender: [''],
    })
  }

  onFormSubmit(){
    if(this.empForm.valid){
      this.eservice.addEmployee(this.empForm.value).subscribe({
        next: (val:any) =>{
          alert('Employee added successfully')
          this.dRef.close()
        }, error: (err:any) => {
          console.error(err)
        }
      })
      
    }
  }
}
