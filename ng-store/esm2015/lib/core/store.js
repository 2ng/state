/**
 * @fileoverview added by tsickle
 * Generated from: lib/core/store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
export class Store {
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
        const _a = this.state, _b = key, k = _a[_b], stateWOcurrentKey = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29zdG9yZS9uZy1zdG9yZS8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE1BQU0sT0FBTyxLQUFLOzs7O0lBUWhCLFlBQW9CLE1BQXFCO1FBQXJCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFQakMsV0FBTSxHQUEyQixFQUFFLENBQUM7UUFLcEMsYUFBUSxHQUFZLEVBQUUsQ0FBQztRQUc3QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFO1lBQ2pELElBQUksT0FBTztnQkFBRSxPQUFPLENBQUMsT0FBTzs7OztnQkFBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUU5QixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO2dCQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQWJELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBYUQsUUFBUSxDQUFDLEdBQVcsRUFBRSxNQUFzQixFQUFFLElBQVU7O2NBQ2hELFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7O2NBQ3pDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7Y0FDeEMsZUFBK0MsRUFBN0MsUUFBSyxFQUFMLFVBQVEsRUFBRSwrRUFBb0I7UUFFdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUMsbUJBQU0saUJBQWlCLElBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLElBQUcsQ0FBQyxtQkFBTSxpQkFBaUIsQ0FBRSxDQUFDO0lBQzNHLENBQUM7Q0FDRjs7Ozs7O0lBdkJDLHVCQUE0Qzs7Ozs7SUFLNUMseUJBQStCOzs7OztJQUVuQix1QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zLCBTdGF0ZUNvbmZpZywgRGVmYXVsdEFjdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0b3JlIHtcclxuICBwcml2YXRlIF9zdGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gIGdldCBzdGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2FjdGlvbnM6IEFjdGlvbnMgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IFN0YXRlQ29uZmlnW10pIHtcclxuICAgIHRoaXMuY29uZmlnLmZvckVhY2goKHsgbmFtZSwgYWN0aW9ucywgcGx1Z2lucyB9KSA9PiB7XHJcbiAgICAgIGlmIChwbHVnaW5zKSBwbHVnaW5zLmZvckVhY2gocGx1Z2luID0+IHBsdWdpbihuYW1lLCBhY3Rpb25zKSk7XHJcbiAgICAgIHRoaXMuX2FjdGlvbnNbbmFtZV0gPSBhY3Rpb25zO1xyXG5cclxuICAgICAgaWYgKGFjdGlvbnMuaGFzKCdASU5JVCcpKSB0aGlzLmRpc3BhdGNoKG5hbWUsICdASU5JVCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaChrZXk6IHN0cmluZywgYWN0aW9uOiBEZWZhdWx0QWN0aW9ucywgZGF0YT86IGFueSkge1xyXG4gICAgY29uc3QgYWN0aW9uRm4gPSB0aGlzLl9hY3Rpb25zW2tleV0uZ2V0KGFjdGlvbik7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhY3Rpb25Gbih0aGlzLnN0YXRlW2tleV0sIGRhdGEpO1xyXG4gICAgY29uc3QgeyBba2V5XTogaywgLi4uc3RhdGVXT2N1cnJlbnRLZXkgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgdGhpcy5fc3RhdGUgPSBhY3Rpb24gIT09ICdAREVTVFJPWScgPyB7IC4uLnN0YXRlV09jdXJyZW50S2V5LCBba2V5XTogcmVzdWx0IH0gOiB7IC4uLnN0YXRlV09jdXJyZW50S2V5IH07XHJcbiAgfVxyXG59XHJcbiJdfQ==