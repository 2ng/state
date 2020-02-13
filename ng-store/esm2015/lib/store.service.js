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
export class StoreService {
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
/** @nocollapse */ StoreService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function StoreService_Factory() { return new StoreService(i0.ɵɵinject(i1.STORE_TOKEN)); }, token: StoreService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3N0b3JlL25nLXN0b3JlLyIsInNvdXJjZXMiOlsibGliL3N0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDcEYsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQU1yQyxNQUFNLE9BQU8sWUFBWTs7OztJQUl2QixZQUF5QyxNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQzVELFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLFlBQVksQ0FBQyxhQUFhLEdBQUcsSUFBSSxlQUFlLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBVztRQUMzQixPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO1lBQ3ZFLFFBQVE7Ozs7O1lBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSyxFQUFFLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFBO1lBQ0QsUUFBUTs7O1lBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDOUMsQ0FBQztJQUNKLENBQUM7OztZQXJCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7d0NBS2MsTUFBTSxTQUFDLFdBQVc7Ozs7Ozs7O0lBSC9CLG9CQUE2Qjs7Ozs7SUFDN0IsMkJBQXNFOzs7OztJQUUxRCw4QkFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9pbnRlcm5hbC9CZWhhdmlvclN1YmplY3QnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcclxuaW1wb3J0IHsgcGx1Y2sgfSBmcm9tICdyeGpzL2ludGVybmFsL29wZXJhdG9ycy9wbHVjayc7XHJcbmltcG9ydCB7IFNUT1JFX1RPS0VOIH0gZnJvbSAnLi9zdG9yZS50b2tlbic7XHJcbmltcG9ydCB7IFN0YXRlQ29uZmlnIH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJy4vY29yZS9zdG9yZSc7XHJcblxyXG4vLyBAZHluYW1pY1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdG9yZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3RhdGljIF9zdG9yZTogU3RvcmU7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgX3N0YXRlU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogYW55IH0+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFNUT1JFX1RPS0VOKSBwcml2YXRlIGNvbmZpZzogU3RhdGVDb25maWdbXSkge1xyXG4gICAgU3RvcmVTZXJ2aWNlLl9zdG9yZSA9IG5ldyBTdG9yZSh0aGlzLmNvbmZpZyk7XHJcbiAgICBTdG9yZVNlcnZpY2UuX3N0YXRlU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoU3RvcmVTZXJ2aWNlLl9zdG9yZS5zdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHVzZShrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb2JzZXJ2YWJsZTogdGhpcy5fc3RhdGVTdWJqZWN0LnBpcGUocGx1Y2soa2V5KSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSksXHJcbiAgICAgIGRpc3BhdGNoOiAoYWN0aW9uLCBkYXRhPykgPT4ge1xyXG4gICAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGtleSwgYWN0aW9uLCBkYXRhKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZVN1YmplY3QubmV4dCh0aGlzLl9zdG9yZS5zdGF0ZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFZhbHVlOiAoKSA9PiB0aGlzLl9zdGF0ZVN1YmplY3QudmFsdWVba2V5XVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19