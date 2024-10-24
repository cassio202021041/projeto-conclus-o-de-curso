import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UsuarioService } from '../usuario.service';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private usuarioService: UsuarioService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.usuarioService.obterTokenUsuario; 
        const requestUrl: Array<any> = request.url.split('/');
        const apiUrl: Array<any> = environment.apiUrl.split('/');

        if (token && requestUrl[2] === apiUrl[2]) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                    token: `${token}`
                }
            });
        }

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.usuarioService.deslogar();
                }
                return throwError(() => new Error(error.message)); 
            })
        );
    }
}
