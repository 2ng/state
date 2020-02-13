import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'theme-toggler',
  template: `
    <div class="block user">
      <button [class.active]="(themeService.theme.observable | async) === 'dark'" (click)="themeService.toggle('dark')">Dark Theme</button>
      <button [class.active]="(themeService.theme.observable | async) === 'light'" (click)="themeService.toggle('light')">Light Theme</button>
    </div>
  `
})
export class ThemeTogglerComponent {
    constructor(public themeService: ThemeService) {}
}
