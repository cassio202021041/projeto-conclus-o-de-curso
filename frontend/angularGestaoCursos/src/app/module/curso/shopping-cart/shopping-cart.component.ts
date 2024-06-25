import { Component, OnInit } from "@angular/core";
import { CursoVenda } from "../../venda/cursovenda";
import { CursoService } from "../curso.service";


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['../home/home.component.css','./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{
  cursos: CursoVenda[] = [];
  valorCompra!: number;
  atualizar: boolean = false;
  cursoVenda!: CursoVenda;
  quantidade!: number;
  carregar:boolean = true;
  notEmpty:boolean = false;

  constructor(private cursoService: CursoService){
    this.cursos = cursoService.getCursosCarrinho();
    this.valorCompra = cursoService.valorCarrinho();
    console.log(this.cursos);
  }

  ngOnInit(): void {
    this.carregar = false;
    if(this.cursos.length > 0){
      this.notEmpty = true;
    }

    }
    removeCursoCarrinho(curso:CursoVenda){
      this.carregar = true;
      this.cursoService.removeCursoCarrinho(curso);
      if(this.cursos.length <= 0){
        this.notEmpty = false;
      }
      this.valorCompra = this.cursoService.valorCarrinho();
      this.carregar = false;

    }
    quantidadeCursoCarrinho(curso:CursoVenda){
      this.carregar = true;
      this.cursoVenda = curso;
      this.atualizar = true;
      this.carregar = false;
    }
    atualizaCursoCarrinho(){
      this.carregar = true;
      this.cursoVenda.quantidade = this.quantidade;
      if(this.cursoVenda.quantidade == 0){
        this.cursoService.removeCursoCarrinho(this.cursoVenda);
        if(this.cursos.length <= 0){
          this.notEmpty = false;
        }
        this.atualizar = false;
        this.valorCompra = this.cursoService.valorCarrinho();
      }
      else{
        this.atualizar = false;
        this.cursoService.atualizaCursoCarrinho(this.cursoVenda);
        this.valorCompra = this.cursoService.valorCarrinho();

      }
      this.carregar = false;
    }
    fechar(){
      this.atualizar=false;
     }

}
