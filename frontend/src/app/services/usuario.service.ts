import { Injectable } from '@angular/core';
import { IUsuario } from '../interfaces/IUsuario';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrlUsuario = environment.apiUrl + "Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  logar(usuario: IUsuario): Observable<any> {
    return this.mockUsuarioLogin(usuario).pipe(
      tap((resposta) => {
        if (!resposta.sucesso) return;

        localStorage.setItem('token', btoa(JSON.stringify("TokenQueSeriaGeradoPelaAPI")));
        localStorage.setItem('usuario', btoa(JSON.stringify(usuario)));
        this.router.navigate(['']);
      })
    );
  }

  private mockUsuarioLogin(usuario: IUsuario): Observable<any> {
    const retornoMock: any = {};

    if (usuario.email === "hello@balta.io" && usuario.senha === "123") {
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      retornoMock.token = "TokenQueSeriaGeradoPelaAPI";
      return of(retornoMock);
    }

    retornoMock.sucesso = false;
    retornoMock.usuario = usuario;
    return of(retornoMock);
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  get obterUsuarioLogado(): IUsuario | null {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(atob(usuario)) : null;
  }

  get obterIdUsuarioLogado(): string | null {
    const usuario = this.obterUsuarioLogado;
    return usuario ? usuario.id : null;
  }

  get obterTokenUsuario(): string | null {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(atob(token)) : null;
  }
  
  get logado(): boolean {
    return !!localStorage.getItem('token');
  }
}
