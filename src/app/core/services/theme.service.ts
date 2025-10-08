import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private mode = 'dark';

  constructor() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add(this.mode);
    } else {
      document.documentElement.classList.remove(this.mode);
    }
  }

  toggleTheme() {
    const isDark = document.documentElement.classList.toggle(this.mode);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    return isDark;
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains(this.mode);
  }
}
