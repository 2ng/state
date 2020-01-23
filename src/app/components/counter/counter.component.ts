import { Component, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "src/app/store/store.service";
import { CounterState } from "./state";

@Component({
  selector: "counter",
  templateUrl: "./counter.component.html"
})
export class CounterComponent {
  counterState: CounterState;
  counter$: Observable<number>;

  constructor(private store: Store) {
    this.counterState = this.store.use("count");
    this.counter$ = this.store.get("count");

    // this.counter$.subscribe(value => console.log("counter changed"));
  }

  increment() {
    this.counterState.dispatch("INC");
  }

  decrement() {
    this.counterState.dispatch("DEC");
  }

  reset() {
    this.counterState.dispatch("INIT");
  }

  set(value) {
    this.counterState.dispatch("SET", value);
  }
}
