import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
})
export class IfElseComponent {
  booleanItems: boolean = false;

  msgFromChild: string = 'THis is the message from the child component';

  @Input() fromParent: string | undefined;
}
