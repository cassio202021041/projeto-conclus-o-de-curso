import { Component, OnInit} from '@angular/core';
import {Venda} from '../venda';
import {VendaService} from '../venda.service';
@Component({
  selector: 'app-management-vendas',
  templateUrl: './management-vendas.component.html',
  styleUrls: ['../../curso/management/management.component.css','./management-vendas.component.css']
})
export class ManagementVendasComponent implements OnInit{
  vendas: Venda[] = [];
  vendasFiltradas: Venda[] = [];
  valorBusca!: number;
  carregar:boolean = true;

  constructor(public vendaService: VendaService) { }
  ngOnInit(): void {
    this.vendaService.getVendas().subscribe({
      next: (data:Venda[]) => {
        this.vendas = data;
        this.vendasFiltradas = this.vendas;
        this.carregar = false;
      },
      error: (error) => {
        this.carregar = false;
        alert('erro ao carregar as informações.');
      }
    })
    }
    deleteVenda(id: number): void {
      if (confirm('Tem certeza que deseja excluir esta venda?')) {

        this.vendaService.delete(id).subscribe({
          next: () => {
          this.carregar=true;
          const index = this.vendas.findIndex(venda => venda.id === id);
          if (index !== -1) {
            this.vendas.splice(index, 1);
          }
          this.carregar = false;
        },
        error: (error) => {
          this.carregar = false;
          alert('erro ao deletar a venda.');
        }
        });
      }
    }
    busca() {
      this.carregar = true;
      let word = this.valorBusca;
      this.vendasFiltradas =[];
          this.vendas.forEach(venda => {
            if (venda.id === word) {
              this.vendasFiltradas.push(venda);
            }
          });
          this.carregar = false;
    }
}
