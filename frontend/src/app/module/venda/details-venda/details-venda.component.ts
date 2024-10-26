import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Venda } from "../venda";
import { VendaService } from "../venda.service";

@Component({
  selector: 'app-details-venda',
  templateUrl: './details-venda.component.html',
  styleUrls: ['../../curso/home/home.component.css','../../aluno/details-aluno/details-aluno.component.css','./details-venda.component.css']
})
export class DetailsVendaComponent implements OnInit{
  id!:number;
  venda!: Venda;
  carregar:boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, public vendaService: VendaService) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.vendaService.find(this.id).subscribe((data: Venda)=>{
    this.venda = data;
    console.log(this.venda);
    this.carregar = false;
    })
    }
     voltarParaHome() {
    this.router.navigate(['/']);
  }

}
