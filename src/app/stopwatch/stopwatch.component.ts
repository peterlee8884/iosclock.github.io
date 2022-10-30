import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent implements OnInit {
  ms:any='0'+0;
  sec:any='0'+0;
  min:any='0'+0;
  hr:any='0'+0;

  startTimer:any;
  running=false;

  start():void{
    if(!this.running){
      this.running=true;
      this.startTimer=setInterval(()=>{
        this.ms++;
        this.ms=this.ms<10?'0'+this.ms:this.ms;

        if(this.ms===100){
        this.sec++;
        this.sec=this.sec<10?'0'+this.sec:this.sec;
        this.ms='0'+0;
        }
        if(this.sec===60){
        this.min++;
        this.min=this.min<10?'0'+this.min:this.min;
        this.sec='0'+0;
        }
        if(this.min===60){
          this.hr++;
          this.hr=this.hr<10?'0'+this.hr:this.hr;
          this.min='0'+0;
          }
      },10);
    }else{
      this.stop();
    }
  }
  stop():void{
    clearInterval(this.startTimer);
    this.running=false;
  }
  reset():void{
    clearInterval(this.startTimer);
    this.running=false;
    this.hr=this.min=this.sec=this.ms='0'+0;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
