import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NG_STORE } from 'projects/ng-store/src/public-api';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { counter } from './components/counter/store';
import { ThemeTogglerComponent } from './components/theme-toggler/theme-toggler.component';
import { user } from './components/user/store';
import { UserComponent } from './components/user/user.component';
import { theme } from './services/theme/store';

@NgModule({
  declarations: [AppComponent, CounterComponent, UserComponent, ThemeTogglerComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: NG_STORE,
      useValue: { theme, user, counter }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
