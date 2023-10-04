import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Home {
    rollNo: number = 0;
    name: string = "";
    myForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.myForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
            rollNo: ['', [Validators.required]]
        });
    }
}