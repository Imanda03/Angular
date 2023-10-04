import { FormBuilder, FormGroup, Validators } from "@angular/forms"

export class Form{
    fullname : string =''
    phone : number =0
    details : any

    myForm : FormGroup<any>

    constructor(private fb : FormBuilder){
        this.myForm= this.fb.group({
            fullname:['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
            phone : ['',[Validators.required]],
            details : ['',[Validators.required]]
        })
    }
}