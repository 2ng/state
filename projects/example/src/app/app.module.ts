import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterComponent } from '~components/counter/counter.component';
import { ThemeTogglerComponent } from '~components/theme-toggler/theme-toggler.component';
import { UserUIComponent } from '~components/user-ui/user.component';
import { UserComponent } from '~components/user/user.component';
import { STORE } from '~store/store';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    UserComponent,
    UserUIComponent,
    ThemeTogglerComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [STORE],
})
export class AppModule {}
