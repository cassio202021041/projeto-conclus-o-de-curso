import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
  mensagemErro: string = ''; // Mensagem de erro

  constructor(public vendaService: VendaService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    }

    enviar() {
      this.carregar = true; // Iniciar o carregamento

      this.vendaService.find(this.id).subscribe({
        next: (data: Venda) => {
          if (data && data.cursoVendas && data.cursoVendas.length > 0) {
            this.venda = data;
            this.cursos = this.venda.cursoVendas;
            this.mensagemErro = ''; // Limpar mensagem de erro
          } else {
            this.venda = null;
            this.cursos = [];
            this.mensagemErro = 'Aluno inscrito'; // Mensagem de erro
          }
          this.carregar = false; // Finalizar o carregamento
        },
        error: (err) => {
          console.error('Erro ao buscar curso:', err);
          this.venda = null;
          this.cursos = [];
          this.mensagemErro = 'Aluno não encontrado. Tente novamente mais tarde.';
          this.carregar = false; // Finalizar o carregamento
        }
      });
    }
  }
