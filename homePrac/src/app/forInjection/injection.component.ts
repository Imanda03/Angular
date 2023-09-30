import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class InjectionServices {
  
  ServiceList: Array<any> = [
    { id: 1, serviceItem: 'Item1' },
    { id: 1, serviceItem: 'Item2' },
    { id: 1, serviceItem: 'Item3' },
    { id: 1, serviceItem: 'Item4' },
  ];

  addPost(data:any){
    this.ServiceList.push(data)
  }
}
