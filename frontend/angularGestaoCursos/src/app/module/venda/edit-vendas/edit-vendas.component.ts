import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CursoVenda } from "../cursovenda";
import { Venda } from "../venda";
import { VendaService } from "../venda.service";



@Component({
  selector: 'app-edit-vendas',
  templateUrl: './edit-vendas.component.html',
  styleUrls: ['../../curso/edit/edit.component.css','../../curso/home/home.component.css','../../cliente/details-cliente/details-cliente.component.css', './edit-vendas.component.css']
})
export class EditVendasComponent implements OnInit{

  id!: number;
  venda: Venda = {} as Venda;
  form!: FormGroup;
  quantidade!: number;
  atualizar: boolean = false;
  cursoVenda!: CursoVenda;
  carregar:boolean = true;

  constructor(
    public vendaService: VendaService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    if (this.id !== null) {

      this.id = this.route.snapshot.params['id'];
      this.venda.id = this.id;

      this.vendaService.find(this.id).subscribe((data: Venda)=>{
      this.venda = data;});
      this.carregar = false;

    }
    else{
      this.router.navigateByUrl('');

    }
    this.form = new FormGroup({

      cliente_id: new FormControl('', [Validators.required]),
      data_compra: new FormControl('', [Validators.required]),


    });
  }


  get f(){
    return this.form.controls;
  }





  atualizaCompra(){
    this.carregar = true;

    console.log(this.form.value);

    this.venda.dia_venda = this.form.value.data_compra;
    this.venda.valor = this.form.value.valor;



      this.vendaService.update(this.venda).subscribe(res => {
        this.carregar = false;
        alert('Venda atualizada com sucesso!');
        this.vendaService.find(this.id).subscribe((data: Venda)=>{
        this.venda = data;});

    })
  }
  removerCurso(curso:CursoVenda){
    this.carregar = true;
    curso.quantidade = 0;
    this.vendaService.AtualizaCursosVenda(curso).subscribe(res => {
      alert('Venda atualizada com sucesso!');
      this.vendaService.find(this.id).subscribe((data: Venda)=>{
      this.venda = data;});
      this.carregar = false;
    })
  }
  quantidadeCurso(curso:CursoVenda){
    this.carregar = true;
    this.cursoVenda = curso;
    this.atualizar=true;
    this.carregar = false;
  }
  AtualizaCursosVenda() {
    this.carregar = true;
    this.atualizar=false;
    this.cursoVenda.vendaId= this.venda.id;
    this.cursoVenda.quantidade = this.quantidade;
    console.log(this.cursoVenda.quantidade);
    if(this.cursoVenda.quantidade==0){
     this.cursoVenda.quantidade = 1;
    }
    console.log(this.cursoVenda.quantidade);
    this.vendaService.AtualizaCursosVenda(this.cursoVenda).subscribe(res => {

      alert('Venda atualizada com sucesso!');
      this.vendaService.find(this.id).subscribe((data: Venda)=>{
      this.venda = data;
    });

  })

  }
  fechar(){
    this.atualizar=false;
   }

}
