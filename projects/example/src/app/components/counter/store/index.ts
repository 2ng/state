import createStore from 'projects/ng-store/src/lib/core';
import applyMiddleware, { keeper, logger, undoable } from 'projects/ng-store/src/lib/core/middleware';
import { CounterActions } from './models/counter-actions.type';
import { Counter } from './models/counter.type';

const counter = createStore<Counter, CounterActions>('counter');

counter.on('@INIT', () => 0);
counter.on('INC', state => ++state);
counter.on('DEC', state => --state);
counter.on('SET', (state, value) => value);

applyMiddleware(counter, [undoable(), keeper(), logger()]);
export { counter };

