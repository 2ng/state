/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        var _b = this.state, _c = key, k = _b[_c], stateWOcurrentKey = tslib_1.__rest(_b, [typeof _c === "symbol" ? _c : _c + ""]);
        this._state = action !== '@DESTROY' ? tslib_1.__assign({}, stateWOcurrentKey, (_a = {}, _a[key] = result, _a)) : tslib_1.__assign({}, stateWOcurrentKey);
    };
    return Store;
}());
export { Store };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29zdG9yZS9uZy1zdG9yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBO0lBUUUsZUFBb0IsTUFBcUI7UUFBekMsaUJBT0M7UUFQbUIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQVBqQyxXQUFNLEdBQTJCLEVBQUUsQ0FBQztRQUtwQyxhQUFRLEdBQVksRUFBRSxDQUFDO1FBRzdCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsRUFBMEI7Z0JBQXhCLGNBQUksRUFBRSxvQkFBTyxFQUFFLG9CQUFPO1lBQzNDLElBQUksT0FBTztnQkFBRSxPQUFPLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQXJCLENBQXFCLEVBQUMsQ0FBQztZQUM5RCxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUU5QixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2dCQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQWJELHNCQUFJLHdCQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7Ozs7Ozs7SUFhRCx3QkFBUTs7Ozs7O0lBQVIsVUFBUyxHQUFXLEVBQUUsTUFBc0IsRUFBRSxJQUFVOzs7WUFDaEQsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzs7WUFDekMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUN4QyxlQUErQyxFQUE3QyxRQUFLLEVBQUwsVUFBUSxFQUFFLCtFQUFvQjtRQUV0QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQyxzQkFBTSxpQkFBaUIsZUFBRyxHQUFHLElBQUcsTUFBTSxPQUFHLENBQUMsc0JBQU0saUJBQWlCLENBQUUsQ0FBQztJQUMzRyxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7Ozs7Ozs7SUF2QkMsdUJBQTRDOzs7OztJQUs1Qyx5QkFBK0I7Ozs7O0lBRW5CLHVCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMsIFN0YXRlQ29uZmlnLCBEZWZhdWx0QWN0aW9ucyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvcmUge1xyXG4gIHByaXZhdGUgX3N0YXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgZ2V0IHN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYWN0aW9uczogQWN0aW9ucyA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogU3RhdGVDb25maWdbXSkge1xyXG4gICAgdGhpcy5jb25maWcuZm9yRWFjaCgoeyBuYW1lLCBhY3Rpb25zLCBwbHVnaW5zIH0pID0+IHtcclxuICAgICAgaWYgKHBsdWdpbnMpIHBsdWdpbnMuZm9yRWFjaChwbHVnaW4gPT4gcGx1Z2luKG5hbWUsIGFjdGlvbnMpKTtcclxuICAgICAgdGhpcy5fYWN0aW9uc1tuYW1lXSA9IGFjdGlvbnM7XHJcblxyXG4gICAgICBpZiAoYWN0aW9ucy5oYXMoJ0BJTklUJykpIHRoaXMuZGlzcGF0Y2gobmFtZSwgJ0BJTklUJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpc3BhdGNoKGtleTogc3RyaW5nLCBhY3Rpb246IERlZmF1bHRBY3Rpb25zLCBkYXRhPzogYW55KSB7XHJcbiAgICBjb25zdCBhY3Rpb25GbiA9IHRoaXMuX2FjdGlvbnNba2V5XS5nZXQoYWN0aW9uKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGFjdGlvbkZuKHRoaXMuc3RhdGVba2V5XSwgZGF0YSk7XHJcbiAgICBjb25zdCB7IFtrZXldOiBrLCAuLi5zdGF0ZVdPY3VycmVudEtleSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICB0aGlzLl9zdGF0ZSA9IGFjdGlvbiAhPT0gJ0BERVNUUk9ZJyA/IHsgLi4uc3RhdGVXT2N1cnJlbnRLZXksIFtrZXldOiByZXN1bHQgfSA6IHsgLi4uc3RhdGVXT2N1cnJlbnRLZXkgfTtcclxuICB9XHJcbn1cclxuIl19