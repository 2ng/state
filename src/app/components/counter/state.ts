import { CreateState } from "src/app/store/state.types";

interface CounterStateConfig {
  key: "count";
  INIT: () => number;
  INC: (state: number) => number;
  DEC: (state: number) => number;
  SET: (state: number, value: number) => number;
}

export const COUNT_STATE: CounterStateConfig = {
  key: "count",
  INIT: () => 0,
  INC: state => ++state,
  DEC: state => --state,
  SET: (state, value) => (state = value)
};

export interface CounterState extends CreateState<CounterStateConfig> {}
