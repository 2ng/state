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
export var logger = (/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvc3RvcmUvbmctc3RvcmUvIiwic291cmNlcyI6WyJsaWIvcGx1Z2lucy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUs7SUFDN0Isa0JBQWtCO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQ1QsSUFBSSxJQUFHLE1BQUksR0FBRyxNQUFHLENBQUEsR0FBRyxLQUFLLEdBQUcsTUFBTSxFQUNsQyxhQUFhLEVBQUUsK0JBQStCLEVBQzlDLEtBQUssQ0FDSixDQUFDO0FBQ04sQ0FBQzs7QUFFRCxNQUFNLEtBQU8sTUFBTTs7O0FBQUc7SUFDcEI7Ozs7O0lBQU8sVUFBUyxJQUFJLEVBQUUsT0FBcUQ7UUFDekUsT0FBTyxDQUFDLE9BQU87Ozs7O1FBQUMsVUFBQyxRQUFRLEVBQUUsTUFBTTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07Ozs7O1lBQUUsVUFBQyxLQUFLLEVBQUUsSUFBSTs7b0JBQ3hCLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztnQkFDakMsR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUMsRUFBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvZyhrZXksIGFjdGlvbiwgdmFsdWUpIHtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBjb25zb2xlLmxvZyhcclxuICAgICclYycgKyBgWyR7a2V5fV1gICsgJyAlYycgKyBhY3Rpb24sIFxyXG4gICAgJ2NvbG9yOiAjMDcwJywgJ2NvbG9yOiAjMDcwOyBmb250LXdlaWdodDogNzAwJywgXHJcbiAgICB2YWx1ZVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2dlciA9ICgpID0+IHtcclxuICByZXR1cm4gZnVuY3Rpb24obmFtZSwgYWN0aW9uczogTWFwPHN0cmluZywgKHN0YXRlOiBhbnksIGRhdGE/OiBhbnkpID0+IGFueT4pIHtcclxuICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uRm4sIGFjdGlvbikgPT4ge1xyXG4gICAgICBhY3Rpb25zLnNldChhY3Rpb24sIChzdGF0ZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGFjdGlvbkZuKHN0YXRlLCBkYXRhKTtcclxuICAgICAgICBsb2cobmFtZSwgYWN0aW9uLCByZXMpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGFjdGlvbnM7XHJcbiAgfTtcclxufTtcclxuIl19