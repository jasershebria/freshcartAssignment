import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {

  constructor() {
 
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (localStorage.getItem('userToken') != null) {
     let userHeaders: any= {
        token: localStorage.getItem('userToken')
      }
      let reqwithheader = request.clone({
        setHeaders: userHeaders
      })
      return next.handle(reqwithheader);
    }
    else{
      return next.handle(request);
    }

  }
}
