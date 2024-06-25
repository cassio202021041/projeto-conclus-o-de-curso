import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { Venda } from '../venda';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../curso/curso';

import { CursoVenda } from '../cursovenda';
import { CursoService } from '../../curso/curso.service';


@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['../../curso/home/home.component.css','./add-curso.component.css']
})
export class AddCursoComponent implements OnInit{
  id!: number;
  id_curso!:number;
  venda: Venda = {} as Venda;
  curso: CursoVenda = {} as CursoVenda;
  cursos!: Curso[];
  mostrarQuantidade: boolean = false;
  quantidade!: number;
  adicionar: boolean = false;
  carregar:boolean = true;

  constructor(
    public vendaService: VendaService,
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService
  ) {

  }


  ngOnInit(): void {


      this.id = this.route.snapshot.params['id'];
      this.venda.id = this.id;

      this.vendaService.find(this.id).subscribe((data: Venda)=>{
      this.venda = data;});

      this.cursoService.getCursos().subscribe((data: Curso[])=>{
        this.cursos = data;
        console.log(this.cursos);
        this.carregar = false;
        })



    }
    addCursoToVenda(curso: Curso) {
      this.carregar = true;
      this.adicionar=true;
      this.curso.curso = curso;
      this.curso.valor = this.curso.curso.valor;
      this.curso.vendaId = this.venda.id;
      this.carregar = false;


    }
    completaraddCursoToVenda(){
      this.carregar = true;
        this.curso.quantidade = this.quantidade;
        if(!this.curso.quantidade || this.curso.quantidade<=0){
          this.curso.quantidade =1;
        }
        this.vendaService.addCurso(this.curso).subscribe(res => {
        this.router.navigateByUrl('/vendas/edit/'+ this.venda.id);
      })

    }
    fechar(){
     this.adicionar=false;
    }


  }




