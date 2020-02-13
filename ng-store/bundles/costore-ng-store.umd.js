(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/internal/BehaviorSubject'), require('rxjs/internal/operators/distinctUntilChanged'), require('rxjs/internal/operators/pluck')) :
    typeof define === 'function' && define.amd ? define('@costore/ng-store', ['exports', '@angular/core', 'rxjs/internal/BehaviorSubject', 'rxjs/internal/operators/distinctUntilChanged', 'rxjs/internal/operators/pluck'], factory) :
    (global = global || self, factory((global.costore = global.costore || {}, global.costore['ng-store'] = {}), global.ng.core, global.rxjs['internal/BehaviorSubject'], global.rxjs['internal/operators/distinctUntilChanged'], global.rxjs['internal/operators/pluck']));
}(this, (function (exports, core, BehaviorSubject, distinctUntilChanged, pluck) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/store.token.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STORE_TOKEN = new core.InjectionToken('STORE_TOKEN');

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
            StoreService._stateSubject = new BehaviorSubject.BehaviorSubject(StoreService._store.state);
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
                observable: this._stateSubject.pipe(pluck.pluck(key), distinctUntilChanged.distinctUntilChanged()),
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
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        StoreService.ctorParameters = function () { return [
            { type: Array, decorators: [{ type: core.Inject, args: [STORE_TOKEN,] }] }
        ]; };
        /** @nocollapse */ StoreService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function StoreService_Factory() { return new StoreService(core.ɵɵinject(STORE_TOKEN)); }, token: StoreService, providedIn: "root" });
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

    exports.STORE_TOKEN = STORE_TOKEN;
    exports.StoreService = StoreService;
    exports.UseState = UseState;
    exports.keeper = keeper;
    exports.logger = logger;
    exports.undoable = undoable;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=costore-ng-store.umd.js.map
