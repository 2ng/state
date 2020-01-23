import { CreateState } from "src/app/store/state.types";

export interface User {
  name: string;
}

interface UserStateConfig {
  key: "user";
  INIT: () => User;
  UPPERCASE: (state: User) => User;
  LOWERCASE: (state: User, value: string) => User;
}

export interface UserState extends CreateState<UserStateConfig> {}

export const USER_STATE: UserStateConfig = {
  key: "user",
  INIT: () => ({ name: "andrey" }),
  UPPERCASE: state => ({ ...state, name: state.name.toUpperCase() }),
  LOWERCASE: state => ({ ...state, name: state.name.toLowerCase() })
};
