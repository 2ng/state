import { StateConfig } from './models';
export declare class StoreService {
    private config;
    private static _store;
    private static _stateSubject;
    constructor(config: StateConfig[]);
    static use(key: string): {
        observable: import("rxjs").Observable<any>;
        dispatch: (action: any, data?: any) => void;
        getValue: () => any;
    };
}
