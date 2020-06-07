import { Injectable } from '@angular/core';
import { AppTheme } from './config';
import { NgState } from 'projects/state/src/lib/ng-state';

export interface Theme {
  theme: keyof typeof AppTheme;
}

const initialState: Theme = {
  theme: 'LIGHT_THEME'
};

@Injectable()
export class ThemeStore extends NgState<Theme> {
  constructor() {
    super(initialState);
  }

  setTheme(name: keyof typeof AppTheme) {
    const theme = AppTheme[name];

    for (const key of Object.keys(theme)) {
      document.documentElement.style.setProperty(`--${key}`, theme[key]);
    }

    this.setState({
      theme: name
    });
  }

  toggle() {
    const currentTheme = this.state.get().theme;
    const nextTheme = currentTheme === 'LIGHT_THEME' ? 'DARK_THEME' : 'LIGHT_THEME';

    this.setTheme(nextTheme);
  }
}
