import { Injectable } from '@angular/core';
import { Use } from 'projects/ng-store/src/lib/models';
import { NgStoreService } from 'projects/ng-store/src/public-api';
import { AppState } from '../../appState.interface';
import { DARK_THEME, LIGHT_THEME } from './config';
import { ThemeActions } from './store/models/theme-actions.type';
import { Theme } from './store/models/theme.type';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme: Use<Theme, ThemeActions> = this._storeService.use('themeStore');

  constructor(private _storeService: NgStoreService<AppState>) {
    this.theme.dispatch('@INIT');
    this.theme.changes.subscribe(state => this.setTheme(state.theme));
  }

  toggle(name) {
    this.theme.dispatch('SET_THEME', name);
  }

  private setTheme(name) {
    const theme = name === 'light' ? LIGHT_THEME : name === 'dark' ? DARK_THEME : null;

    if (!theme) throw new Error(`Theme with name: '${name}' is undefined`);

    for (const key of Object.keys(theme)) {
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    }
  }
}
