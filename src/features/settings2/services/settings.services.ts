
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class SettingsService {
  private avatarSubject = new BehaviorSubject<string>('assets/images/icons/avatar.svg');
  avatar$ = this.avatarSubject.asObservable();

  updateAvatar(url: string) {
    this.avatarSubject.next(url);
  }
    
}
