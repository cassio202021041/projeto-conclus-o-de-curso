import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CursoVenda } from "../../venda/cursovenda";
import { Venda } from "../../venda/venda";
import { VendaService } from "../../venda/venda.service";



@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['../home/home.component.css','./tracking.component.css']
})
export class TrackingComponent implements OnInit{
  venda: Venda | null = null;
  cursos! :CursoVenda[];
  carregar: boolean = true;
  id!: number;
  mensagemErro: string = '';
  constructor(public vendaService: VendaService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    }
    voltarParaHome() {
      this.router.navigate(['/']);
    }

    enviar() {
      this.carregar = true;
      this.vendaService.find(this.id).subscribe({
        next: (nome: Venda) => {
          if (nome && nome.cursoVendas && nome.cursoVendas.length > 0) {
            this.venda = nome;
            this.cursos = this.venda.cursoVendas;
            this.mensagemErro = '';
          } else {
            this.venda = null;
            this.cursos = [];
            this.mensagemErro = 'Aluno inscrito';
          }
          this.carregar = false;
        },
        error: (err) => {
          console.error('Erro ao buscar curso:', err);
          this.venda = null;
          this.cursos = [];
          this.mensagemErro = 'Aluno não encontrado. Tente novamente mais tarde.';
          this.carregar = false;
        }
      });
    }
  }
