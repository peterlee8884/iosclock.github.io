import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldTimeComponent } from './world-time/world-time.component';
import { AlarmComponent } from './alarm/alarm.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { TimerComponent } from './timer/timer.component';
import { HeaderComponent } from './header/header.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    WorldTimeComponent,
    AlarmComponent,
    StopwatchComponent,
    PomodoroComponent,
    TimerComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
