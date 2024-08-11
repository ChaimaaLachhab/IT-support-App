import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  let token: string | null = null;

  if (typeof localStorage !== 'undefined') {
    token = localStorage.getItem('jwt');
  }

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('token/////:' + token);
    return next(cloned);
  }
  return next(req);
};
