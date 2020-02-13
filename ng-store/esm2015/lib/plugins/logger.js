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
export const logger = (/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvc3RvcmUvbmctc3RvcmUvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUs7SUFDN0Isa0JBQWtCO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQ1QsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLE1BQU0sRUFDbEMsYUFBYSxFQUFFLCtCQUErQixFQUM5QyxLQUFLLENBQ0osQ0FBQztBQUNOLENBQUM7O0FBRUQsTUFBTSxPQUFPLE1BQU07OztBQUFHLEdBQUcsRUFBRTtJQUN6Qjs7Ozs7SUFBTyxVQUFTLElBQUksRUFBRSxPQUFxRDtRQUN6RSxPQUFPLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07Ozs7O1lBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7O3NCQUM1QixHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7Z0JBQ2pDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN2QixPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDLEVBQUM7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2coa2V5LCBhY3Rpb24sIHZhbHVlKSB7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgY29uc29sZS5sb2coXHJcbiAgICAnJWMnICsgYFske2tleX1dYCArICcgJWMnICsgYWN0aW9uLCBcclxuICAgICdjb2xvcjogIzA3MCcsICdjb2xvcjogIzA3MDsgZm9udC13ZWlnaHQ6IDcwMCcsIFxyXG4gICAgdmFsdWVcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dnZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKG5hbWUsIGFjdGlvbnM6IE1hcDxzdHJpbmcsIChzdGF0ZTogYW55LCBkYXRhPzogYW55KSA9PiBhbnk+KSB7XHJcbiAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbkZuLCBhY3Rpb24pID0+IHtcclxuICAgICAgYWN0aW9ucy5zZXQoYWN0aW9uLCAoc3RhdGUsIGRhdGEpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhY3Rpb25GbihzdGF0ZSwgZGF0YSk7XHJcbiAgICAgICAgbG9nKG5hbWUsIGFjdGlvbiwgcmVzKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhY3Rpb25zO1xyXG4gIH07XHJcbn07XHJcbiJdfQ==