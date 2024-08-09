import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Curso } from "../curso";
import { CursoService } from "../curso.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cursos: Curso[] = [];
  nome!:string;
  carregar:boolean = true;

  constructor(public cursoService: CursoService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      if (params.has('nome')) {
      this.nome = params.get('nome') || '';

      if (this.nome !== '') {
        console.log(this.nome);
        this.cursoService.findByClub(this.nome).subscribe({
          next: (data:Curso[]) => {
            this.cursos = data;
            console.log(this.cursos);
            this.carregar = false;
          },
          error: (error: any) => {
            this.carregar = false;
            alert('nenhuma curso encontrada.');
          }
        });
      } else {
        this.router.navigateByUrl('');
      }
    }
    else if (params.has('idioma')) {
      this.nome = params.get('idioma') || '';
      if (this.nome !== '') {
        console.log(this.nome);

        this.cursoService.findByIdioma(this.nome).subscribe({
          next: (data:Curso[]) => {
          this.cursos = data;
          console.log(this.cursos);
          this.carregar = false;
          },
          error: (error: any) => {
            this.carregar = false;
            alert('nenhuma curso encontrada.');
          }
        });
      } else {
        this.router.navigateByUrl('');
      }
    }
    });

    }
}
