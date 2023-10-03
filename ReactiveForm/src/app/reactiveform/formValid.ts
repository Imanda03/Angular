import { FormGroup, FormControl, Validators } from '@angular/forms';
import { __values } from 'tslib';

// export class formvalid {
//   form: any;
//   constructor() {
//     this.form = new FormGroup({
//       username: new FormControl('', [
//         Validators.required,
//         Validators.minLength(4),
//         Validators.pattern('[^\\s]*'),
//       ]),
//       password: new FormControl('', [
//         Validators.required,
//         Validators.minLength(4),
//         Validators.maxLength(10),
//       ]),
//     });
//   }
// }

export const formValid = {
  username: new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.pattern('[^\\s]*'),
  ]),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(10),
  ]),
};
