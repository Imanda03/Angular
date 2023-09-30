
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  userDetails:Array<any> = [
  ]

  constructor() { }

  addData(data:any){
    this.userDetails.push(data)
  }
}
