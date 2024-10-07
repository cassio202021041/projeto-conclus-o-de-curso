import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private apiURL = "http://localhost:8080/alunos";  // URL base do backend

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  // Método para obter todos os alunos
  getAlunos(): Observable<Aluno[]> {
    return this.httpClient.get<Aluno[]>(this.apiURL, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Método para buscar um aluno por ID
  find(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/${id}`)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Método para buscar um aluno por CPF
  findByCPF(cpf: string): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/find?cpf=${cpf}`)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Método para criar um novo aluno
  create(aluno: Aluno): Observable<any> {
    return this.httpClient.post(this.apiURL, JSON.stringify(aluno), this.httpOptions)
      .pipe(
        catchError((error: any) => {
          const mensagemDeErro = error.error.message;
          alert("Erro: " + mensagemDeErro);
          return throwError('Ocorreu um erro. Por favor, tente novamente mais tarde.');
        })
      );
  }

  // Método para atualizar um aluno existente
  update(aluno: Aluno): Observable<any> {
    return this.httpClient.put(this.apiURL, JSON.stringify(aluno), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Método para deletar um aluno por ID
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiURL}/${id}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  // Manipulador de erros
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
