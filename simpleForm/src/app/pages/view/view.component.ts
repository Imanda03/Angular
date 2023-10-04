import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  userDetails: Array <any> 
  constructor(private service: ServiceService){
    this.userDetails = this.service.userDetails
    console.log(this.userDetails)
  }
}
