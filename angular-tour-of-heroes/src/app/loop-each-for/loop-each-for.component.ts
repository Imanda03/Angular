import { Component } from '@angular/core';

@Component({
  selector: 'app-loop-each-for',
  templateUrl: './loop-each-for.component.html',
  styleUrls: ['./loop-each-for.component.css'],
})
export class LoopEachForComponent {
  items: String[] = ['Anish', 'Manish', 'Anisha'];
}
