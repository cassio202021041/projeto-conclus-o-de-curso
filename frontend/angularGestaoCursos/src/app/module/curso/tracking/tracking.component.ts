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
  venda!: Venda;
  cursos! :CursoVenda[];
  carregar: boolean = true;
  id!: number;

  constructor(public vendaService: VendaService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    }

    enviar(){

    this.vendaService.find(this.id).subscribe((data: Venda)=>{
    this.venda = data;
    this.carregar=false;
    this.cursos = this.venda.cursoVendas;
    })
  }

}
