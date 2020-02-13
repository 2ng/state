/**
 * @fileoverview added by tsickle
 * Generated from: lib/decorators/use-state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StoreService } from '../store.service';
/**
 * @param {?} stateName
 * @return {?}
 */
export function UseState(stateName) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvc3RvcmUvbmctc3RvcmUvIiwic291cmNlcyI6WyJsaWIvZGVjb3JhdG9ycy91c2Utc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBRWhELE1BQU0sVUFBVSxRQUFRLENBQUMsU0FBaUI7SUFDeEM7Ozs7O0lBQU8sVUFBUyxNQUFXLEVBQUUsT0FBZTs7UUFDMUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU07WUFDNUIsR0FBQyxPQUFPLElBQUc7Z0JBQ1QsR0FBRzs7OztvQkFDRCxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7YUFDRjtnQkFDRCxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlU2VydmljZSB9IGZyb20gJy4uL3N0b3JlLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZVN0YXRlKHN0YXRlTmFtZTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKHRhcmdldDogYW55LCBwcm9wS2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwge1xyXG4gICAgICBbcHJvcEtleV06IHtcclxuICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICByZXR1cm4gU3RvcmVTZXJ2aWNlLnVzZShzdGF0ZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG4iXX0=