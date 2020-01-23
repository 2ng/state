import { Component, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "src/app/store/store.service";
import { UserState, User } from "./state";
import { CounterState } from "../counter/state";

@Component({
  selector: "user",
  templateUrl: "./user.component.html"
})
export class UserComponent {
  userState: UserState;
  user$: Observable<User>;

  counterState: CounterState;

  constructor(private store: Store) {
    this.userState = this.store.use("user");
    this.user$ = this.store.get("user");

    this.counterState = this.store.use("count");
  }

  uppercase() {
    this.userState.dispatch("UPPERCASE");
  }

  lowercase() {
    this.userState.dispatch("LOWERCASE");
  }

  increment() {
    this.counterState.dispatch("INC");
  }
}
