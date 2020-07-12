import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeName } from '../../config/theme';
import { ThemeFacade } from './theme-toggler.facade';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeTogglerComponent {
  theme$ = this._facade.theme$;

  constructor(private _facade: ThemeFacade) {}

  setTheme(theme: ThemeName) {
    this._facade.setTheme(theme);
  }
}
