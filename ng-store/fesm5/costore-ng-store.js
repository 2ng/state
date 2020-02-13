import { InjectionToken, Injectable, Inject, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { pluck } from 'rxjs/internal/operators/pluck';
import { __rest, __assign, __spread } from 'tslib';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/store.token.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var STORE_TOKEN = new InjectionToken('STORE_TOKEN');

/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Store = /** @class */ (function () {
    function Store(config) {
        var _this = this;
        this.config = config;
        this._state = {};
        this._actions = {};
        this.config.forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var name = _a.name, actions = _a.actions, plugins = _a.plugins;
            if (plugins)
                plugins.forEach((/**
                 * @param {?} plugin
                 * @return {?}
                 */
                function (plugin) { return plugin(name, actions); }));
            _this._actions[name] = actions;
            if (actions.has('@INIT'))
                _this.dispatch(name, '@INIT');
        }));
    }
    Object.defineProperty(Store.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} key
     * @param {?} action
     * @param {?=} data
     * @return {?}
     */
    Store.prototype.dispatch = /**
     * @param {?} key
     * @param {?} action
     * @param {?=} data
     * @return {?}
     */
    function (key, action, data) {
        var _a;
        /** @type {?} */
        var actionFn = this._actions[key].get(action);
        /** @type {?} */
        var result = actionFn(this.state[key], data);
        var _b = this.state, _c = key, k = _b[_c], stateWOcurrentKey = __rest(_b, [typeof _c === "symbol" ? _c : _c + ""]);
        this._state = action !== '@DESTROY' ? __assign({}, stateWOcurrentKey, (_a = {}, _a[key] = result, _a)) : __assign({}, stateWOcurrentKey);
    };
    return Store;
}());
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
var StoreService = /** @class */ (function () {
    function StoreService(config) {
        this.config = config;
        StoreService._store = new Store(this.config);
        StoreService._stateSubject = new BehaviorSubject(StoreService._store.state);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    StoreService.use = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        return {
            observable: this._stateSubject.pipe(pluck(key), distinctUntilChanged()),
            dispatch: (/**
             * @param {?} action
             * @param {?=} data
             * @return {?}
             */
            function (action, data) {
                _this._store.dispatch(key, action, data);
                _this._stateSubject.next(_this._store.state);
            }),
            getValue: (/**
             * @return {?}
             */
            function () { return _this._stateSubject.value[key]; })
        };
    };
    StoreService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StoreService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [STORE_TOKEN,] }] }
    ]; };
    /** @nocollapse */ StoreService.ngInjectableDef = ɵɵdefineInjectable({ factory: function StoreService_Factory() { return new StoreService(ɵɵinject(STORE_TOKEN)); }, token: StoreService, providedIn: "root" });
    return StoreService;
}());
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
        var _a;
        Object.defineProperties(target, (_a = {},
            _a[propKey] = {
                get: /**
                 * @return {?}
                 */
                function () {
                    return StoreService.use(stateName);
                }
            },
            _a));
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/keeper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var keeper = (/**
 * @return {?}
 */
function () {
    return (/**
     * @param {?} name
     * @param {?} actions
     * @return {?}
     */
    function (name, actions) {
        /** @type {?} */
        var saved = JSON.parse(localStorage.getItem(name));
        actions.set('@LOAD', (/**
         * @return {?}
         */
        function () { return saved; }));
        if (saved)
            actions.set('@INIT', (/**
             * @return {?}
             */
            function () { return actions.get('@LOAD')(null); }));
        actions.forEach((/**
         * @param {?} actionFn
         * @param {?} action
         * @return {?}
         */
        function (actionFn, action) {
            if (action === '@INIT')
                return;
            actions.set(action, (/**
             * @param {?} state
             * @param {?} data
             * @return {?}
             */
            function (state, data) {
                /** @type {?} */
                var res = actionFn(state, data);
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
    console.log('%c' + ("[" + key + "]") + ' %c' + action, 'color: #070', 'color: #070; font-weight: 700', value);
}
/** @type {?} */
var logger = (/**
 * @return {?}
 */
function () {
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
        function (actionFn, action) {
            actions.set(action, (/**
             * @param {?} state
             * @param {?} data
             * @return {?}
             */
            function (state, data) {
                /** @type {?} */
                var res = actionFn(state, data);
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
var undoable = (/**
 * @param {?=} config
 * @return {?}
 */
function (config) {
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
        function (actionFn, action) {
            actions.set(action, (/**
             * @param {?} state
             * @param {?=} data
             * @return {?}
             */
            function (state, data) {
                if (!state)
                    state = { past: [], present: null, future: [] };
                /** @type {?} */
                var newState = actionFn(state.present, data);
                return {
                    past: __spread(state.past, [state.present]),
                    present: newState,
                    future: []
                };
            }));
        }));
        actions.set('@UNDO', (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var past = _a.past, present = _a.present, future = _a.future;
            if (!past.length)
                return { past: past, present: present, future: future };
            /** @type {?} */
            var previous = past[past.length - 1];
            /** @type {?} */
            var newPast = past.slice(0, past.length - 1);
            return {
                past: newPast,
                present: previous,
                future: __spread([present], future)
            };
        }));
        actions.set('@REDO', (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var past = _a.past, present = _a.present, future = _a.future;
            if (!future.length)
                return { past: past, present: present, future: future };
            /** @type {?} */
            var next = future[0];
            /** @type {?} */
            var newFuture = future.slice(1);
            return {
                past: __spread(past, [present]),
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
