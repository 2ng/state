import { Injectable } from "@angular/core";
import { UseState } from 'projects/ng-store/src/public-api';
import { LIGHT_THEME, DARK_THEME } from './config';

@Injectable({providedIn: 'root'})
export class ThemeService {
  @UseState('theme') theme;
  
  constructor() {
    this.theme.observable.subscribe(name => this.setTheme(name))
  }

  toggle(name) {
    this.theme.dispatch('SET_THEME', name);
  }

  private setTheme(name) {
    const theme = name === 'light' ? LIGHT_THEME : name === 'dark' ? DARK_THEME : null;
    
    Object.keys(theme).forEach(k => document.documentElement.style.setProperty(`--${k}`, theme[k]));
  }
}