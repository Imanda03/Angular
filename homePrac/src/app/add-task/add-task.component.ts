import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  name: String | undefined;
  phone: Number | undefined;
  address: String | undefined;

  userArray: Array<any> = [];

  onCLick() {
    this.userArray.push({
      name: this.name,
      phone: this.phone,
      address: this.address,
    });
    this.name = '';
    this.phone = 0;
    this.address = '';

    console.log(this.userArray);
  }

  onDelete(index: any) {
    this.userArray.splice(index);
  }
  onSubmit() {}
}
