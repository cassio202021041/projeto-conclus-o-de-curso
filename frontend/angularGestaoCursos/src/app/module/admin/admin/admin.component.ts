import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  [x: string]: any;// Lista de opções para os administradores
  adminOptions: string[] = [
    'Gerenciar Alunos',
    'Configurações do Sistema',
    'Relatórios',
    'Logs de Atividade'
  ];

  constructor(private router: Router) { }

  gerenciarAlunos(option: string) {
    this.router.navigate(['/alunos']);
  }
  configuracaoSistema(configuracao: string){


  }
  relatorio (relatorio: string){

  }
  logsAtividades (logs: string){

  }
}
