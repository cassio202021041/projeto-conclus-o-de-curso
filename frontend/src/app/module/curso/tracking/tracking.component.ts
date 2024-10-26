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
  mensagemErro: string = ''; // Mensagem de erro

  constructor(public vendaService: VendaService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    }
    voltarParaHome() {
      this.router.navigate(['/']); // Navega para a home
    }

    enviar() {
      this.carregar = true; // Iniciar o carregamento

      this.vendaService.find(this.id).subscribe({
        next: (data: Venda) => {
          try {
            // Verifique se a data e os cursos estão corretos
            if (data && data.cursoVendas && data.cursoVendas.length > 0) {
              this.venda = data;
              this.cursos = this.venda.cursoVendas;
              this.mensagemErro = ''; // Limpar mensagem de erro
            } else {
              this.venda = null;
              this.cursos = [];
              this.mensagemErro = 'Aluno inscrito'; // Mensagem de erro
            }
          } catch (error) {
            console.error('Erro ao processar os dados:', error);
            this.mensagemErro = 'Erro ao processar os dados. Tente novamente.';
          } finally {
            this.carregar = false; // Finalizar o carregamento
          }
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
