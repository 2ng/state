import { Component } from '@angular/core';
import {ThemeStore} from '../../store/theme/theme.store';

@Component({
  selector: 'app-theme-toggler',
  template: `
    <div class="block user">
      <button
        [class.active]="(theme | async) === 'DARK_THEME'"
        (click)="themeStore.setTheme('DARK_THEME')"
      >
        Dark Theme
      </button>
      <button
        [class.active]="(theme | async) === 'LIGHT_THEME'"
        (click)="themeStore.setTheme('LIGHT_THEME')"
      >
        Light Theme
      </button>
    </div>
  `
})
export class ThemeTogglerComponent {
  theme = this.themeStore.state.changes('theme');

  constructor(public themeStore: ThemeStore) {}
}
