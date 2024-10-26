import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CursoVenda } from "../../venda/cursovenda";
import { Curso } from "../curso";
import { CursoService } from "../curso.service";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!: number;
  curso!: Curso;
  cursoVenda!: CursoVenda;
  quantidade: number = 1;
  carregar:boolean = true;


  constructor(private route: ActivatedRoute, private router: Router, public cursoService: CursoService) {

  }  ngOnInit():void{
  }
  addCursoCarrinho() {
    this.cursoVenda.curso = this.curso;
    this.cursoVenda.quantidade = this.quantidade;
    this.cursoVenda.valor = this.curso.valor;
    console.log(this.cursoVenda);
    this.cursoService.addCursoCarrinho(this.cursoVenda);

  }



}
