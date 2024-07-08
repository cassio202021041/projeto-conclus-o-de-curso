import { Component, OnInit} from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';



@Component({
  selector: 'app-management-aluno',
  templateUrl: './management-aluno.component.html',
  styleUrls: ['../../curso/management/management.component.css', './management-aluno.component.css']
})
export class ManagementAlunoComponent implements OnInit {
  alunos: Aluno[] = [];
  alunosFiltrados: Aluno[] = [];
  valorBusca!: string;
  carregar:boolean = true;

  constructor(public alunoService: AlunoService) { }
  ngOnInit(): void {
    this.alunoService.getAlunos().subscribe({
      next: (data:Aluno[]) => {
        this.alunos = data;
        this.alunosFiltrados = this.alunos;
        this.carregar = false;
      },
      error: (error) => {
        this.carregar = false;
        alert('erro ao carregar as informações.');
      }
    })
    }
    deleteAluno(id: number): void {
      if (confirm('Tem certeza que deseja excluir este aluno?')) {
        this.carregar = true;
        this.alunoService.delete(id).subscribe({
          next: () => {
            this.alunos = this.alunos.filter(aluno => aluno.id !== id);
            this.alunosFiltrados = this.alunos;
            this.carregar = false;
          },
          error: (error) => {
            this.carregar = false;
            alert('erro ao deletar o aluno.');
          }
        });
      }
    }
    busca() {
      this.carregar = true;
      let word = this.valorBusca;
      this.alunosFiltrados =[];
          this.alunos.forEach(aluno => {
            if (aluno.nome.toLowerCase().includes(word)) {
              this.alunosFiltrados.push(aluno);
            }
          });
          this.carregar = false;

    }
}
