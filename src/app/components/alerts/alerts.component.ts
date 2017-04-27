/**
 * Created by iZel on 4/24/17.
 */
import {Component, Injectable, EventEmitter, OnInit} from "@angular/core";

@Injectable()
export class AlertsService{

  eventAlerts = new EventEmitter();

  constructor(){}

  pushAlert(alert){
    this.eventAlerts.emit({
      type:alert.type || 'success',
      msg:alert.msg || 'Error',
      timeout:alert.timeout || 3000,
      place:alert.place || 'right-bottom',
      size:alert.size || 'default',
      dismissible:true
    })
  }
}

@Component({
  selector:'alerts',
  templateUrl:'./alerts.component.html',
  styleUrls:['./alerts.component.css']
})


export class AlertsComponent implements OnInit{

  constructor(private alertsService:AlertsService){}
  alerts:any=[];
  queue:any=[];
  private _limit=5;
  private _countsAlerts=0;

  ngOnInit(){
    this.alertsService.eventAlerts.subscribe((alert)=>{
      if(this._countsAlerts < this._limit){
        this.alerts.unshift(alert);
        this._countsAlerts++;
      }else{
        this.queue.push(alert);
      }
    })
  }

  closed(e,alert){
    this._countsAlerts--;
    if(this.queue.length){
      this.alerts.unshift(this.queue.shift());
      this._countsAlerts++;
    }
  }
}

