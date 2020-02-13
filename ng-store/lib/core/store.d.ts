import { StateConfig, DefaultActions } from '../models';
export declare class Store {
    private config;
    private _state;
    readonly state: {
        [key: string]: any;
    };
    private _actions;
    constructor(config: StateConfig[]);
    dispatch(key: string, action: DefaultActions, data?: any): void;
}
