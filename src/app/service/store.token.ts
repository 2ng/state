import { InjectionToken } from '@angular/core';
import { StateConfig } from './models';

export const STORE_TOKEN = new InjectionToken<StateConfig[]>("STORE_TOKEN");