import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { ThemeTogglerComponent } from './components/theme-toggler/theme-toggler.component';
import { UserComponent } from './components/user/user.component';
import { ThemeStore } from './store/theme/theme.store';

@NgModule({
  declarations: [AppComponent, CounterComponent, UserComponent, ThemeTogglerComponent],
  imports: [BrowserModule],
  providers: [ThemeStore],
  bootstrap: [AppComponent]
})
export class AppModule {}
