import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (typeof localStorage !== 'undefined') {
      let token = localStorage.getItem('token');
      if (token) {
        request = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + token),
        });
      }
    }
    return next.handle(request);
  }
}
