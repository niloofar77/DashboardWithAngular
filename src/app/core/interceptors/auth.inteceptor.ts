import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../../../features/auth/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();

    let cloned = req;
    if (accessToken) {
      cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    return next.handle(cloned).pipe(
      catchError((error: HttpErrorResponse) => {
       
        if (error.status === 401 && !this.isRefreshing) {
          this.isRefreshing = true;
          return this.authService.refreshAccessToken().pipe(
            switchMap((res) => {
              this.isRefreshing = false;

              this.authService.setTokens(res.accessToken);

              const newReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${res.accessToken}`,
                },
              });

              return next.handle(newReq);
            }),
            catchError((refreshError) => {
              this.isRefreshing = false;
              this.authService.logout();
              return throwError(() => refreshError);
            })
          );
        }

        return throwError(() => error);
      })
    );
  }
}
