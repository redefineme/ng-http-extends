import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,XHRBackend ,RequestOptions} from '@angular/http';

// import { T} from 'ngx-bootstrap'

import { AppComponent } from './app.component';
import { HttpExtends} from './services/http-extends';




export function InterceptHttp(backend: XHRBackend, options: RequestOptions){
  return new HttpExtends(backend, options,{
    "Content-Type":"application/json",
    "user":"Adrian"
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    [
      {
        provide: HttpExtends,
        useFactory: InterceptHttp,
        deps: [XHRBackend, RequestOptions]
      }
    ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
