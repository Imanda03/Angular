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
}
