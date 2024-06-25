import { Component, OnInit } from "@angular/core";
import { Curso } from "../curso";
import { CursoService } from "../curso.service";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  cursos: Curso[] = [];
  cursosFiltradas: Curso[] = [];
  valorBusca!: string;
  carregar:boolean = true;

  constructor(public cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe({
        next: (data: Curso[]) => {
          this.cursos = data;
          this.cursosFiltradas = this.cursos;
        this.carregar = false;
      },
      error: (error: any) => {
        alert('Ocorreu um erro ao buscar as cursos:');
        this.carregar = false;
      }
    });
  }

    deleteCurso(id: number): void {
      if (confirm('Tem certeza que deseja excluir esta curso?')) {
        this.carregar=true;
        this.cursoService.delete(id).subscribe({
          next: () => {
            const index = this.cursos.findIndex(curso => curso.id === id);
            if (index !== -1) {
              this.cursos.splice(index, 1); // Remove a curso do array pelo índice
            }
            this.carregar = false;
          },
          error: (error: any) => {
            this.carregar = false;
            alert('Ocorreu um erro ao deletar a curso.');
          }
      })
      }
    }
    busca() {
      this.carregar=true;
      let word = this.valorBusca;
      this.cursosFiltradas =[];
          this.cursos.forEach(curso => {
            if (curso.clube.toLowerCase().includes(word)) {
              this.cursosFiltradas.push(curso);
              this.carregar=false;
            }
          });

    }

}
