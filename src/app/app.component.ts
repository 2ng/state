import { Component } from "@angular/core"
import { StoreService } from './service/store.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  constructor(store: StoreService) {}
}
