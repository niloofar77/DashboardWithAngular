
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private translations = new BehaviorSubject<{ [key: string]: string }>({});
  currentLang: string = 'fa'

  constructor(private http: HttpClient) {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.currentLang = savedLang;
      this.load(savedLang).subscribe(); 
    } else {
      this.load(this.currentLang).subscribe(); 
    }
  }

  load(lang: string): Observable<any> {
    this.currentLang = lang;
    localStorage.setItem('lang', lang); 
    return this.http
      .get<{ [key: string]: string }>(`assets/i18n/${lang}.json`)
      .pipe(tap((data) => this.translations.next(data)));
  }

  translate(key: string): string {
    return this.translations.value[key] || key;
  }
}
