import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Venda } from "../../venda/venda";
import { VendaService } from "../../venda/venda.service";
import { Aluno } from "../aluno";
import { AlunoService } from "../aluno.service";




@Component({
  selector: 'app-details-aluno',
  templateUrl: './details-aluno.component.html',
  styleUrls: ['../../curso/home/home.component.css','./details-aluno.component.css']
})
export class DetailsAlunoComponent implements OnInit{
  id!: number;
  aluno: Aluno = {} as Aluno;
  vendas!: Venda[];
  carregar:boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, public alunoService: AlunoService, public vendaService: VendaService) {

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    if (this.id !== null) {
      console.log(this.id);

       this.alunoService.find(this.id).subscribe((data: Aluno)=>{
        this.aluno = data;
        console.log(this.aluno);
        })
        this.vendaService.getAlunoVendas(this.id).subscribe((data: Venda[])=>{
          this.vendas = data;
          console.log(this.vendas);
          })
      this.carregar = false;
    }
    else{
      this.router.navigateByUrl('');
    }


  }
}
