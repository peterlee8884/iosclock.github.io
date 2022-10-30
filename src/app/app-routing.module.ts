import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { TimerComponent } from './timer/timer.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { WorldTimeComponent } from './world-time/world-time.component';
import { AlarmComponent } from './alarm/alarm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'worldtime',component:WorldTimeComponent},
  {path:'alarm',component:AlarmComponent},
  {path:'stopwatch',component:StopwatchComponent},
  {path:'timer',component:TimerComponent},
  {path:'pomodoro',component:PomodoroComponent},
  {path:'',redirectTo:'/WorldTime',pathMatch:'full'},
  {path:'**',component:WorldTimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
