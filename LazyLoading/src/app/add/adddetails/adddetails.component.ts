import { Component, OnDestroy, OnChanges } from '@angular/core';
import { PostService } from 'src/app/sercice/post.service';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.css']
})
export class AdddetailsComponent  {
  name!: String;
  phone!:Number ;

  onSubmit(){
    // this.data = [{name: this.name,phone:this.phone}]
    // console.log(this.data)
    this.postService.addData({name:this.name, phone: this.phone})
    this.name ='';
    this.phone = 0
  }
  constructor(private postService : PostService){
    console.log('Contructor: ----------->')
  }

 
}
