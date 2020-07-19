import { NgState } from '@2ng/state';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { ThemeFacade } from '~components/theme-toggler/theme-toggler.facade';
import { ThemeName, Themes } from '~config/theme';

interface ThemeState {
  theme: ThemeName;
}

@Injectable()
export class ThemeStore extends NgState<ThemeState> implements ThemeFacade {
  /** @selector Текущая тема */
  theme$ = this.select(state => state.theme);

  /** @action Устанавливает тему */
  SET_THEME = this.pipe(
    map((name: ThemeName) => {
      const theme = Themes[name];

      for (const [prop, value] of Object.entries(theme)) {
        document.documentElement.style.setProperty(`--${prop}`, value);
      }

      return { theme: name };
    })
  );

  constructor() {
    super({
      theme: 'DARK',
    });

    this.setTheme(this.state.theme);
  }

  setTheme(name: ThemeName) {
    this.dispatch(this.SET_THEME, name);
  }
}
