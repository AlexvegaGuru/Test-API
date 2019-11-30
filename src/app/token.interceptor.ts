import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { environment } from 'src/environments/environment';

  @Injectable()
  export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
      let reqUrl = "https://api.github.com/";
      req = req.clone({
        headers: req.headers.set(
          "Authorization",
          " " +  environment.gitToken
        ),
        url: reqUrl + "" + req.url
      });
      return next.handle(req);
    }
  }
