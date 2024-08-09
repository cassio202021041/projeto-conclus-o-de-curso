import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CursoVenda } from '../venda/cursovenda';
import { Curso } from './curso';




@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiURL = "http://localhost:8080/";

  public carrinho: CursoVenda[] = [];

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

  constructor(private httpClient: HttpClient) { }

  getCursos(): Observable<Curso[]> {
    const url = this.apiURL + 'cursos';


    return this.httpClient.get<Curso[]>(url, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + 'cursos/' + id)
    .pipe(
      catchError(this.errorHandler)
    )

    }
    findByClub(nome:string): Observable<Curso[]> {
      const url = this.apiURL + 'cursos/find?nome='+ nome;


      return this.httpClient.get<Curso[]>(url, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    findByIdioma(nome:string): Observable<Curso[]> {
      const url = this.apiURL + 'cursos/find2?idioma='+ nome;


      return this.httpClient.get<Curso[]>(url, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    create(curso:Curso):  Observable<any> {

      return this.httpClient.post(this.apiURL + 'cursos', JSON.stringify(curso), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
    }

    update(curso:Curso): Observable<any> {

      return this.httpClient.put(this.apiURL + 'cursos', JSON.stringify(curso), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
    }

    delete(id:number){
      return this.httpClient.delete(this.apiURL + 'cursos/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }


    errorHandler(error:any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
   }

   addCursoCarrinho(curso: CursoVenda) {
    const index = this.carrinho.findIndex(cursoCarrinho => cursoCarrinho.curso.id === curso.curso.id);
    if (index !== -1) {
      this.carrinho[index].quantidade += curso.quantidade;
      console.log('Curso encontrada e atualizada no carrinho.');
    } else {
      this.carrinho.push(curso);
      console.log('Curso adicionada ao carrinho.');
    }
  }

  getCursosCarrinho(){
    return this.carrinho;
  }

  removeCursoCarrinho(curso: CursoVenda) {
    const index = this.carrinho.findIndex(cursoCarrinho => cursoCarrinho.curso.id === curso.curso.id);
    if (index !== -1) {
    this.carrinho.splice(index, 1);
    console.log(this.carrinho);
    }
  }

  atualizaCursoCarrinho(curso:CursoVenda){
    const index = this.carrinho.findIndex(cursoCarrinho => cursoCarrinho.curso.id === curso.curso.id);
    if (index !== -1) {
      this.carrinho[index].quantidade = curso.quantidade;
      console.log(this.carrinho);
    }
  }

  valorCarrinho(){
    let valor = 0;
    this.carrinho.forEach(cursoCarrinho => {
      valor += cursoCarrinho.curso.valor * cursoCarrinho.quantidade;
    });
    return valor;
  }

  limpaCarrinho(){
    this.carrinho = [];
  }
}
