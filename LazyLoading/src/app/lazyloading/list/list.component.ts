import { Component, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/sercice/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnDestroy {

  
  listDetails:Array<any>
  
  constructor(private data : PostService){
    this.listDetails = data.userDetails
    console.log(this.data.userDetails)
  }

  ngOnDestroy(): void {
    console.log('Being destroy')
    this.data.userDetails = [];
    console.log(this.data.userDetails)
}
}
