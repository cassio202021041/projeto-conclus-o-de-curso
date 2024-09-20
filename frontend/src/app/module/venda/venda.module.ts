import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendaRoutingModule } from './venda-routing.module';
import { ManagementVendasComponent } from './management-vendas/management-vendas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsVendaComponent } from './details-venda/details-venda.component';
import { EditVendasComponent } from './edit-vendas/edit-vendas.component';
import { CreateVendaComponent } from './create-venda/create-venda.component';
import { AddCursoComponent } from './add-curso/add-curso.component';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    ManagementVendasComponent,
    DetailsVendaComponent,
    EditVendasComponent,
    AddCursoComponent,
    CreateVendaComponent
  ],
  imports: [
    CommonModule,
    VendaRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class VendaModule { }
