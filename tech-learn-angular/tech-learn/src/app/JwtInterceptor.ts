import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class JwtInterceptor implements  HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authenticationToken =  localStorage.getItem('authenticationToken');
    req=req.clone({
        setHeaders: { Authorization: `Bearer ${authenticationToken}` }
    });

    return next.handle(req);
  }


}