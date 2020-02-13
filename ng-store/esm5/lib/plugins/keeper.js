/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/keeper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var keeper = (/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VlcGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvc3RvcmUvbmctc3RvcmUvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9rZWVwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxLQUFPLE1BQU07OztBQUFHO0lBQ3BCOzs7OztJQUFPLFVBQVMsSUFBSSxFQUFFLE9BQXFEOztZQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTzs7O1FBQUUsY0FBTSxPQUFBLEtBQUssRUFBTCxDQUFLLEVBQUMsQ0FBQztRQUVsQyxJQUFJLEtBQUs7WUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87OztZQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixFQUFDLENBQUM7UUFFbEUsT0FBTyxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxRQUFRLEVBQUUsTUFBTTtZQUMvQixJQUFJLE1BQU0sS0FBSyxPQUFPO2dCQUFFLE9BQU87WUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNOzs7OztZQUFFLFVBQUMsS0FBSyxFQUFFLElBQUk7O29CQUN4QixHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7Z0JBQ2pDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQyxFQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGtlZXBlciA9ICgpID0+IHtcclxuICByZXR1cm4gZnVuY3Rpb24obmFtZSwgYWN0aW9uczogTWFwPHN0cmluZywgKHN0YXRlOiBhbnksIGRhdGE/OiBhbnkpID0+IGFueT4pIHtcclxuICAgIGNvbnN0IHNhdmVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSk7XHJcbiAgICBhY3Rpb25zLnNldCgnQExPQUQnLCAoKSA9PiBzYXZlZCk7XHJcblxyXG4gICAgaWYgKHNhdmVkKSBhY3Rpb25zLnNldCgnQElOSVQnLCAoKSA9PiBhY3Rpb25zLmdldCgnQExPQUQnKShudWxsKSk7XHJcblxyXG4gICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb25GbiwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGlmIChhY3Rpb24gPT09ICdASU5JVCcpIHJldHVybjtcclxuXHJcbiAgICAgIGFjdGlvbnMuc2V0KGFjdGlvbiwgKHN0YXRlLCBkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYWN0aW9uRm4oc3RhdGUsIGRhdGEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGFjdGlvbnM7XHJcbiAgfTtcclxufTtcclxuIl19