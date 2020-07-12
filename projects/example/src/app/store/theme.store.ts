import { NgState } from '@2ng/state';
import { Injectable } from '@angular/core';
import { ThemeFacade } from '~components/theme-toggler/theme-toggler.facade';
import { ThemeName, Themes } from '~config/theme';

interface ThemeState {
  theme: ThemeName;
}

const initialState: ThemeState = {
  theme: 'DARK',
};

@Injectable()
export class ThemeStore extends NgState<ThemeState> implements ThemeFacade {
  theme$ = this.select(state => state.theme);

  constructor() {
    super(initialState);

    this.setTheme(this.state.theme);
  }

  setTheme(name: ThemeName) {
    const theme = Themes[name];

    for (const [prop, value] of Object.entries(theme)) {
      document.documentElement.style.setProperty(`--${prop}`, value);
    }

    this.setState({ theme: name });
  }
}
