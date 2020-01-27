import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { COUNTER_STATE_CONFIG } from './components/counter/state/counter';
import { USER_STATE_CONFIG } from './components/user/state/user';
import { UserComponent } from './components/user/user.component';
import { StoreService } from './core/store/store.service';
import { STORE_TOKEN } from './core/store/store.token';

@NgModule({
  declarations: [AppComponent, CounterComponent, UserComponent],
  imports: [BrowserModule],
  providers: [
    StoreService,
    {
      provide: STORE_TOKEN,
      useValue: [COUNTER_STATE_CONFIG, USER_STATE_CONFIG]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
