import { Component } from '@angular/core';
import { PostService } from './sercice/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title = 'LazyLoading';
}
