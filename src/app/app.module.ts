import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { COUNTER_STATE_CONFIG } from './components/counter/state/counter';
import { USER_STATE_CONFIG } from './components/user/state/user';
import { UserComponent } from './components/user/user.component';
import { TEMP_STATE_CONFIG } from './components/user/state/temp';
import { STORE_TOKEN } from './services/store/store.token';
import { StoreService } from './services/store/store.service';

@NgModule({
  declarations: [AppComponent, CounterComponent, UserComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: STORE_TOKEN,
      useValue: [COUNTER_STATE_CONFIG, USER_STATE_CONFIG, TEMP_STATE_CONFIG]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    this.injector.get(StoreService);
  }
}
