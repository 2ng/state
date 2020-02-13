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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXN0YXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvc3RvcmUvbmctc3RvcmUvIiwic291cmNlcyI6WyJsaWIvZGVjb3JhdG9ycy91c2Utc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBRWhELE1BQU0sVUFBVSxRQUFRLENBQUMsU0FBaUI7SUFDeEM7Ozs7O0lBQU8sVUFBUyxNQUFXLEVBQUUsT0FBZTtRQUMxQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQzlCLENBQUMsT0FBTyxDQUFDLEVBQUU7Ozs7Z0JBQ1QsR0FBRztvQkFDRCxPQUFPLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZVNlcnZpY2UgfSBmcm9tICcuLi9zdG9yZS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VTdGF0ZShzdGF0ZU5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiBmdW5jdGlvbih0YXJnZXQ6IGFueSwgcHJvcEtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHtcclxuICAgICAgW3Byb3BLZXldOiB7XHJcbiAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgcmV0dXJuIFN0b3JlU2VydmljZS51c2Uoc3RhdGVOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn1cclxuIl19