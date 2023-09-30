import { Component } from '@angular/core';
import { InjectionServices } from '../forInjection/injection.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  injectService: Array<any>;

  constructor(private injectionService: InjectionServices) {
    this.injectService = injectionService.ServiceList;
  }
  addItem(){
    let newPost = [
      {id: 5, postTitle: "Post item 5"}
    ]
    this.injectionService.addPost(newPost)
  }

}
