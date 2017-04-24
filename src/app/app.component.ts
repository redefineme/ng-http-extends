import { Component, OnInit } from '@angular/core';
import { HttpExtends} from './services/http-extends';
import { AlertsService} from './components/alerts/alerts.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  constructor(private http:HttpExtends, private alertsService:AlertsService){}

  ngOnInit(){
    this.request();
  }

  request(){
    this.http.get("http://jsonplaceholder.typicode.com/users")
      .subscribe(
        (data)=>{
          console.log(data);
          this.http.setHeader({
            "Content-Type":"application/json"
          })
          this.alertsService.pushAlert({
            msg:'users Complate!!! '
          })

        },
        (e)=>{
          console.log(e);
        }
      )
  }

  addAlert(){
    this.alertsService.pushAlert({
      msg:new Date().getMilliseconds()
    })
  }
}
