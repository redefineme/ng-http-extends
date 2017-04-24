import { Component, OnInit } from '@angular/core';
import { HttpExtends} from './services/http-extends';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  constructor(private http:HttpExtends){}

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
        },
        (e)=>{
          console.log(e);
        }
      )
  }
}
