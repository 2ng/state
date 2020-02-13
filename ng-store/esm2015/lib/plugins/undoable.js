/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugins/undoable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const undoable = (/**
 * @param {?=} config
 * @return {?}
 */
(config) => {
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
             * @param {?=} data
             * @return {?}
             */
            (state, data) => {
                if (!state)
                    state = { past: [], present: null, future: [] };
                /** @type {?} */
                const newState = actionFn(state.present, data);
                return {
                    past: [...state.past, state.present],
                    present: newState,
                    future: []
                };
            }));
        }));
        actions.set('@UNDO', (/**
         * @param {?} __0
         * @return {?}
         */
        ({ past, present, future }) => {
            if (!past.length)
                return { past, present, future };
            /** @type {?} */
            const previous = past[past.length - 1];
            /** @type {?} */
            const newPast = past.slice(0, past.length - 1);
            return {
                past: newPast,
                present: previous,
                future: [present, ...future]
            };
        }));
        actions.set('@REDO', (/**
         * @param {?} __0
         * @return {?}
         */
        ({ past, present, future }) => {
            if (!future.length)
                return { past, present, future };
            /** @type {?} */
            const next = future[0];
            /** @type {?} */
            const newFuture = future.slice(1);
            return {
                past: [...past, present],
                present: next,
                future: newFuture
            };
        }));
        return actions;
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kb2FibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29zdG9yZS9uZy1zdG9yZS8iLCJzb3VyY2VzIjpbImxpYi9wbHVnaW5zL3VuZG9hYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU0sT0FBTyxRQUFROzs7O0FBQUcsQ0FBQyxNQUFPLEVBQUUsRUFBRTtJQUNsQzs7Ozs7SUFBTyxVQUFTLElBQUksRUFBRSxPQUFxRDtRQUN6RSxPQUFPLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07Ozs7O1lBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSyxFQUFFLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxLQUFLO29CQUFFLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7O3NCQUN0RCxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO2dCQUU5QyxPQUFPO29CQUNMLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNwQyxPQUFPLEVBQUUsUUFBUTtvQkFDakIsTUFBTSxFQUFFLEVBQUU7aUJBQ1gsQ0FBQztZQUNKLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQzs7a0JBRTdDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O2tCQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDOUMsT0FBTztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixPQUFPLEVBQUUsUUFBUTtnQkFDakIsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDO2FBQzdCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTzs7OztRQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDOztrQkFFL0MsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7O2tCQUNoQixTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDakMsT0FBTztnQkFDTCxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxPQUFPLENBQUM7Z0JBQ3hCLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE1BQU0sRUFBRSxTQUFTO2FBQ2xCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUMsRUFBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1bmRvYWJsZSA9IChjb25maWc/KSA9PiB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKG5hbWUsIGFjdGlvbnM6IE1hcDxzdHJpbmcsIChzdGF0ZTogYW55LCBkYXRhPzogYW55KSA9PiBhbnk+KSB7XHJcbiAgICBhY3Rpb25zLmZvckVhY2goKGFjdGlvbkZuLCBhY3Rpb24pID0+IHtcclxuICAgICAgYWN0aW9ucy5zZXQoYWN0aW9uLCAoc3RhdGUsIGRhdGE/KSA9PiB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZSkgc3RhdGUgPSB7IHBhc3Q6IFtdLCBwcmVzZW50OiBudWxsLCBmdXR1cmU6IFtdIH07XHJcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBhY3Rpb25GbihzdGF0ZS5wcmVzZW50LCBkYXRhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHBhc3Q6IFsuLi5zdGF0ZS5wYXN0LCBzdGF0ZS5wcmVzZW50XSxcclxuICAgICAgICAgIHByZXNlbnQ6IG5ld1N0YXRlLFxyXG4gICAgICAgICAgZnV0dXJlOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWN0aW9ucy5zZXQoJ0BVTkRPJywgKHsgcGFzdCwgcHJlc2VudCwgZnV0dXJlIH0pID0+IHtcclxuICAgICAgaWYgKCFwYXN0Lmxlbmd0aCkgcmV0dXJuIHsgcGFzdCwgcHJlc2VudCwgZnV0dXJlIH07XHJcblxyXG4gICAgICBjb25zdCBwcmV2aW91cyA9IHBhc3RbcGFzdC5sZW5ndGggLSAxXTtcclxuICAgICAgY29uc3QgbmV3UGFzdCA9IHBhc3Quc2xpY2UoMCwgcGFzdC5sZW5ndGggLSAxKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXN0OiBuZXdQYXN0LFxyXG4gICAgICAgIHByZXNlbnQ6IHByZXZpb3VzLFxyXG4gICAgICAgIGZ1dHVyZTogW3ByZXNlbnQsIC4uLmZ1dHVyZV1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIGFjdGlvbnMuc2V0KCdAUkVETycsICh7IHBhc3QsIHByZXNlbnQsIGZ1dHVyZSB9KSA9PiB7XHJcbiAgICAgIGlmICghZnV0dXJlLmxlbmd0aCkgcmV0dXJuIHsgcGFzdCwgcHJlc2VudCwgZnV0dXJlIH07XHJcblxyXG4gICAgICBjb25zdCBuZXh0ID0gZnV0dXJlWzBdO1xyXG4gICAgICBjb25zdCBuZXdGdXR1cmUgPSBmdXR1cmUuc2xpY2UoMSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFzdDogWy4uLnBhc3QsIHByZXNlbnRdLFxyXG4gICAgICAgIHByZXNlbnQ6IG5leHQsXHJcbiAgICAgICAgZnV0dXJlOiBuZXdGdXR1cmVcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhY3Rpb25zO1xyXG4gIH07XHJcbn07XHJcbiJdfQ==