import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IfElseComponent } from './if-else/if-else.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'Tours of heroes';

  msgToChild = 'This the message from the parent component';

  msgChild: String | undefined;

  @ViewChild(IfElseComponent) msg: string | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    // this.msgChild = this.msg.msgFromChild;
  }
}
