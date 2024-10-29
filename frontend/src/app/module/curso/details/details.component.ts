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
    this.cursoVenda = {
      id: 0,
      curso: {
        id:0,
        linguagem: "",
        idioma: "",
        imagem: "",
        ano:0,
        quantidade:0,
        valor:0
      },
      vendaId: 0,
      quantidade: 0,
      valor: 0,
    };
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if (this.id !== null) {
      console.log(this.id);
      this.cursoService.find(this.id).subscribe({
        next: (data: Curso) => {
          this.curso = data;
        this.carregar = false;
      },
      error: (error: any) => {
        console.error('Ocorreu um erro ao buscar a curso:', error);
        this.carregar = false; }
      });
    }
    else{
      this.router.navigateByUrl('');
    }
  } 
  addCursoCarrinho() {
    this.cursoVenda.curso = this.curso;
    this.cursoVenda.quantidade = this.quantidade;
    this.cursoVenda.valor = this.curso.valor;
    console.log(this.cursoVenda);
    this.cursoService.addCursoCarrinho(this.cursoVenda);

  }



}
