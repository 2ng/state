/**
 * @fileoverview added by tsickle
 * Generated from: lib/store.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { pluck } from 'rxjs/internal/operators/pluck';
import { STORE_TOKEN } from './store.token';
import { Store } from './core/store';
import * as i0 from "@angular/core";
import * as i1 from "./store.token";
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
    /** @nocollapse */ StoreService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StoreService_Factory() { return new StoreService(i0.ɵɵinject(i1.STORE_TOKEN)); }, token: StoreService, providedIn: "root" });
    return StoreService;
}());
export { StoreService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3N0b3JlL25nLXN0b3JlLyIsInNvdXJjZXMiOlsibGliL3N0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDcEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUdyQztJQU9FLHNCQUF5QyxNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQzVELFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLFlBQVksQ0FBQyxhQUFhLEdBQUcsSUFBSSxlQUFlLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVhLGdCQUFHOzs7O0lBQWpCLFVBQWtCLEdBQVc7UUFBN0IsaUJBU0M7UUFSQyxPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO1lBQ3ZFLFFBQVE7Ozs7O1lBQUUsVUFBQyxNQUFNLEVBQUUsSUFBSztnQkFDdEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUE7WUFDRCxRQUFROzs7WUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQTdCLENBQTZCLENBQUE7U0FDOUMsQ0FBQztJQUNKLENBQUM7O2dCQXJCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzRDQUtjLE1BQU0sU0FBQyxXQUFXOzs7dUJBaEJqQztDQStCQyxBQXRCRCxJQXNCQztTQW5CWSxZQUFZOzs7Ozs7SUFDdkIsb0JBQTZCOzs7OztJQUM3QiwyQkFBc0U7Ozs7O0lBRTFELDhCQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdCc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9pbnRlcm5hbC9vcGVyYXRvcnMvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xyXG5pbXBvcnQgeyBwbHVjayB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3BsdWNrJztcclxuaW1wb3J0IHsgU1RPUkVfVE9LRU4gfSBmcm9tICcuL3N0b3JlLnRva2VuJztcclxuaW1wb3J0IHsgU3RhdGVDb25maWcgfSBmcm9tICcuL21vZGVscyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9jb3JlL3N0b3JlJztcclxuXHJcbi8vIEBkeW5hbWljXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0b3JlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3N0b3JlOiBTdG9yZTtcclxuICBwcml2YXRlIHN0YXRpYyBfc3RhdGVTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBhbnkgfT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoU1RPUkVfVE9LRU4pIHByaXZhdGUgY29uZmlnOiBTdGF0ZUNvbmZpZ1tdKSB7XHJcbiAgICBTdG9yZVNlcnZpY2UuX3N0b3JlID0gbmV3IFN0b3JlKHRoaXMuY29uZmlnKTtcclxuICAgIFN0b3JlU2VydmljZS5fc3RhdGVTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChTdG9yZVNlcnZpY2UuX3N0b3JlLnN0YXRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdXNlKGtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvYnNlcnZhYmxlOiB0aGlzLl9zdGF0ZVN1YmplY3QucGlwZShwbHVjayhrZXkpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKSxcclxuICAgICAgZGlzcGF0Y2g6IChhY3Rpb24sIGRhdGE/KSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goa2V5LCBhY3Rpb24sIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlU3ViamVjdC5uZXh0KHRoaXMuX3N0b3JlLnN0YXRlKTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0VmFsdWU6ICgpID0+IHRoaXMuX3N0YXRlU3ViamVjdC52YWx1ZVtrZXldXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=