

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private selectedItemSubject = new BehaviorSubject<string>('home'); 
  
  selectedItem$ = this.selectedItemSubject.asObservable();

  
  setSelectedItem(item: string) {
    this.selectedItemSubject.next(item);
  }
}
