import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  postList:Array<any> = [
    {id:1, postTitle: "Post item 1"},
    {id:2, postTitle: "Post item 2"},
    {id:3, postTitle: "Post item 3"},
    {id:4, postTitle: "Post item 4"},
  ]

  addPost(data:any){
    
  }

  constructor() { }
}
