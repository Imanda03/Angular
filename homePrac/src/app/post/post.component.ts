import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() fromParent: string | undefined;

  postParentMsg: String = 'message coming from post component';

  childMsg: string = 'From child component';

  secondChildMsg: String = 'Message from post Component->child component';

  @Output() messageEvent = new EventEmitter<String>();

  sendMessage() {
    this.messageEvent.emit(this.secondChildMsg);
  }

  constructor() {}
  ngOnInit(): void {}
}
