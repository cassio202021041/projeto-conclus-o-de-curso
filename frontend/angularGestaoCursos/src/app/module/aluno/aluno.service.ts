import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Aluno } from './aluno';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private apiURL = "http://localhost:8080/";

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }

    constructor(private httpClient: HttpClient) { }

    getAlunos(): Observable<Aluno[]> {

      const url = this.apiURL + 'alunos';

      return this.httpClient.get<Aluno[]>(url, this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        );
    }

    find(id:number): Observable<any> {
      return this.httpClient.get(this.apiURL + 'alunos/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    findByCPF(cpf:string): Observable<any> {
      return this.httpClient.get(this.apiURL + 'alunos/find?cpf=' + cpf)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    create(aluno:Aluno):  Observable<any> {

      return this.httpClient.post(this.apiURL + 'alunos', JSON.stringify(aluno), this.httpOptions)

      .pipe(
        catchError((error: any) => {
          const mensagemDeErro = error.error.message;
          alert("Erro: " + mensagemDeErro);

        return ('Ocorreu um erro. Por favor, tente novamente mais tarde.');
      })
      )
    }

    update(aluno:Aluno): Observable<any> {

      return this.httpClient.put(this.apiURL + 'alunos', JSON.stringify(aluno), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
    }

    delete(id:number){
      return this.httpClient.delete(this.apiURL + 'alunos/' + id, this.httpOptions)
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

}
