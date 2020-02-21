import { ThemeActions } from './models/theme-actions.type';
import { Theme } from './models/theme.type';
import Store from '@ng-store/core';

export const theme = new Store<Theme, ThemeActions>({ theme: 'light' });

theme.on('SET_THEME', (state, name) => ({ theme: name }));
