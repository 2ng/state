
import createStore from 'projects/ng-store/src/lib/core';
import applyMiddleware, { keeper, logger } from 'projects/ng-store/src/lib/core/middleware';
import { Store } from 'projects/ng-store/src/lib/core/models';
import { ThemeActions } from './models/theme-actions.type';
import { Theme } from './models/theme.type';


const theme: Store<Theme, ThemeActions> = createStore('theme');

theme.on('@INIT', () => 'light');
theme.on('SET_THEME', (state, name: Theme) => name);

applyMiddleware(theme, [keeper(), logger()]);
export { theme };

