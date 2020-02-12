import { Component } from "@angular/core";
import { Store } from './core/store/store.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  constructor(store: Store) {}
}
