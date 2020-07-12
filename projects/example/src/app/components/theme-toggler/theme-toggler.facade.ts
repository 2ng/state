import { Observable } from 'rxjs/internal/Observable';
import { ThemeName } from '~config/theme';

export abstract class ThemeFacade {
  abstract theme$: Observable<ThemeName>;

  abstract setTheme(theme: ThemeName): void;
}
