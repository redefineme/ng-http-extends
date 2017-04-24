/**
 * Created by iZel on 4/23/17.
 */
import { Injectable} from '@angular/core';
import { Http,XHRBackend,RequestOptions,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()

//inherent Http
export class HttpExtends extends Http{

  // header for default
  private _headers:any={
    "Content-Type":"application/json"
  };

  constructor(_backend: XHRBackend, _defaultOptions: RequestOptions, headers?:any){
    // We construct Http
    super(_backend,_defaultOptions);

    // instance the new headers
    if(headers){
      this._headers=headers
    }
  }

  get(url:string){
    return super.get(url,{headers:new Headers(this._headers)})
      .map((data)=>data.json())
      .catch(this._handleError)
  }

  post(url:string,body?:any,options?:RequestOptions){
    return super.post(url,body,options)
      .map(data=>data.json())
      .catch(this._handleError)
  }

  // extends method for Http

  setHeader(header:any){
    this._headers=header
  }


  private _handleError(e){
    console.log(e);
    return Observable.throw(e);
  }
}
