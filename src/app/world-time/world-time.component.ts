import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world-time',
  templateUrl: './world-time.component.html',
  styleUrls: ['./world-time.component.css']
})
export class WorldTimeComponent implements OnInit {
  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  constructor() { }

  ngOnInit(): void {
  }

}
