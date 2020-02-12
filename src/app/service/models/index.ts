export type DispatchFunction<Actions> = (key: Actions, data?: any) => void;

// ^)
export type AppStateKeys = 'counter' | 'user' | 'temp';

export type DefaultActions = '@INIT' | '@DESTROY' & string;

type ActionsMap = Map<string, (state: any, data?: any) => any>;
export type Actions = {[key: string]: ActionsMap};
type Plugin = (name: string, actions: ActionsMap) => void;

export interface StateConfig {
  name: string;
  actions: ActionsMap;
  plugins: Plugin[];
} 