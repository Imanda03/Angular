import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'homePrac';
  parentComponent = 'This is the message from parent component ';

  message: String | undefined;

  @ViewChild(PostComponent) childComp: any;

  constructor() {
    console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.message = this.childComp.childMsg;
  }

  receiveMessage($event: any) {
    console.log($event);
  }

  imgUrl: string = 'https://m.media-amazon.com/images/I/415MsdCcduL.png';

  bbol: boolean = true;

  // onKeyUp($event: any) {
  //   console.log($event);
  // }

  onKeyUp(username: any) {
    console.log(username);
  }
}
