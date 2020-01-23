import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Store, STORE_TOKEN } from "./store/store.service";
import { APP_STATE } from "./store";
import { CounterComponent } from "./components/counter/counter.component";
import { UserComponent } from "./components/user/user.component";

@NgModule({
  declarations: [AppComponent, CounterComponent, UserComponent],
  imports: [BrowserModule],
  providers: [Store, { provide: STORE_TOKEN, useValue: APP_STATE }],
  bootstrap: [AppComponent]
})
export class AppModule {}
