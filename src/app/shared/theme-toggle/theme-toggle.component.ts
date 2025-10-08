import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="toggleTheme()"
      class="p-2 rounded-md border border-gray-300 dark:border-gray-600 transition"
    >
      <span *ngIf="!isDark">🌙  تاریک</span>
      <span *ngIf="isDark">☀️ روشن</span>
    </button>
  `,
})
export class ThemeToggleComponent {
  isDark = false;

  constructor(private themeService: ThemeService) {
    this.isDark = this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.isDark = this.themeService.toggleTheme();
  }
}
