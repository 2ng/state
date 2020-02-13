import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { pluck } from 'rxjs/internal/operators/pluck';
import { __rest } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/store.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const STORE_TOKEN = new InjectionToken('STORE_TOKEN');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Store {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this._state = {};
        this._actions = {};
        this.config.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ({ name, actions, plugins }) => {
            if (plugins)
                plugins.forEach((/**
                 * @param {?} plugin
                 * @return {?}
                 */
                plugin => plugin(name, actions)));
            this._actions[name] = actions;
            if (actions.has('@INIT'))
                this.dispatch(name, '@INIT');
        }));
    }
    /**
     * @return {?}
     */
    get state() {
        return this._state;
    }
    /**
     * @param {?} key
     * @param {?} action
     * @param {?=} data
     * @return {?}
     */
    dispatch(key, action, data) {
        /** @type {?} */
        const actionFn = this._actions[key].get(action);
        /** @type {?} */
        const result = actionFn(this.state[key], data);
        const _a = this.state, _b = key, k = _a[_b], stateWOcurrentKey = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        this._state = action !== '@DESTROY' ? Object.assign({}, stateWOcurrentKey, { [key]: result }) : Object.assign({}, stateWOcurrentKey);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Store.prototype._state;
    /**
     * @type {?}
     * @private
     */
    Store.prototype._actions;
    /**
     * @type {?}
     * @private
     */
    Store.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/store.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class StoreService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        StoreService._store = new Store(this.config);
        StoreService._stateSubject = new BehaviorSubject(StoreService._store.state);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    static use(key) {
        return {
            observable: this._stateSubject.pipe(pluck(key), distinctUntilChanged()),
            dispatch: (/**
             * @param {?} action
             * @param {?=} data
             * @return {?}
             */
            (action, data) => {
                this._store.dispatch(key, action, data);
                this._stateSubject.next(this._store.state);
            }),
            getValue: (/**
             * @return {?}
             */
            () => this._stateSubject.value[key])
        };
    }
}
StoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
StoreService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [STORE_TOKEN,] }] }
];
/** @nocollapse */ StoreService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StoreService_Factory() { return new StoreService(ɵɵinject(STORE_TOKEN)); }, token: StoreService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    StoreService._store;
    /**
     * @type {?}
     * @private
     */
    StoreService._stateSubject;
    /**
     * @type {?}
     * @private
     */
    StoreService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/decorators/use-state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} stateName
 * @return {?}
 */
function UseState(stateName) {
    return (/**
     * @param {?} target
     * @param {?} propKey
     * @return {?}
     */
    function (target, propKey) {
        Object.defineProperties(target, {
            [propKey]: {
                /**
                 * @return {?}
                 */
                get() {
                    return StoreService.use(stateName);
                }
            }
        });
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/keeper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const keeper = (/**
 * @return {?}
 */
() => {
    return (/**
     * @param {?} name
     * @param {?} actions
     * @return {?}
     */
    function (name, actions) {
        /** @type {?} */
        const saved = JSON.parse(localStorage.getItem(name));
        actions.set('@LOAD', (/**
         * @return {?}
         */
        () => saved));
        if (saved)
            actions.set('@INIT', (/**
             * @return {?}
             */
            () => actions.get('@LOAD')(null)));
        actions.forEach((/**
         * @param {?} actionFn
         * @param {?} action
         * @return {?}
         */
        (actionFn, action) => {
            if (action === '@INIT')
                return;
            actions.set(action, (/**
             * @param {?} state
             * @param {?} data
             * @return {?}
             */
            (state, data) => {
                /** @type {?} */
                const res = actionFn(state, data);
                localStorage.setItem(name, JSON.stringify(res));
                return res;
            }));
        }));
        return actions;
    });
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/logger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} key
 * @param {?} action
 * @param {?} value
 * @return {?}
 */
function log(key, action, value) {
    // prettier-ignore
    console.log('%c' + `[${key}]` + ' %c' + action, 'color: #070', 'color: #070; font-weight: 700', value);
}
/** @type {?} */
const logger = (/**
 * @return {?}
 */
() => {
    return (/**
     * @param {?} name
     * @param {?} actions
     * @return {?}
     */
    function (name, actions) {
        actions.forEach((/**
         * @param {?} actionFn
         * @param {?} action
         * @return {?}
         */
        (actionFn, action) => {
            actions.set(action, (/**
             * @param {?} state
             * @param {?} data
             * @return {?}
             */
            (state, data) => {
                /** @type {?} */
                const res = actionFn(state, data);
                log(name, action, res);
                return res;
            }));
        }));
        return actions;
    });
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/undoable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const undoable = (/**
 * @param {?=} config
 * @return {?}
 */
(config) => {
    return (/**
     * @param {?} name
     * @param {?} actions
     * @return {?}
     */
    function (name, actions) {
        actions.forEach((/**
         * @param {?} actionFn
         * @param {?} action
         * @return {?}
         */
        (actionFn, action) => {
            actions.set(action, (/**
             * @param {?} state
             * @param {?=} data
             * @return {?}
             */
            (state, data) => {
                if (!state)
                    state = { past: [], present: null, future: [] };
                /** @type {?} */
                const newState = actionFn(state.present, data);
                return {
                    past: [...state.past, state.present],
                    present: newState,
                    future: []
                };
            }));
        }));
        actions.set('@UNDO', (/**
         * @param {?} __0
         * @return {?}
         */
        ({ past, present, future }) => {
            if (!past.length)
                return { past, present, future };
            /** @type {?} */
            const previous = past[past.length - 1];
            /** @type {?} */
            const newPast = past.slice(0, past.length - 1);
            return {
                past: newPast,
                present: previous,
                future: [present, ...future]
            };
        }));
        actions.set('@REDO', (/**
         * @param {?} __0
         * @return {?}
         */
        ({ past, present, future }) => {
            if (!future.length)
                return { past, present, future };
            /** @type {?} */
            const next = future[0];
            /** @type {?} */
            const newFuture = future.slice(1);
            return {
                past: [...past, present],
                present: next,
                future: newFuture
            };
        }));
        return actions;
    });
});

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: costore-ng-store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { STORE_TOKEN, StoreService, UseState, keeper, logger, undoable };
//# sourceMappingURL=costore-ng-store.js.map
