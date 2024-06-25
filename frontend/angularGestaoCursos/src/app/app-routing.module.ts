import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateClienteComponent } from './module/cliente/create-cliente/create-cliente.component';
import { EditClienteComponent } from './module/cliente/edit-cliente/edit-cliente.component';
import { ManagementClienteComponent } from './module/cliente/management-cliente/management-cliente.component';
import { BuyComponent } from './module/curso/buy/buy.component';
import { CreateComponent } from './module/curso/create/create.component';
import { DetailsComponent } from './module/curso/details/details.component';
import { EditComponent } from './module/curso/edit/edit.component';
import { HomeComponent } from './module/curso/home/home.component';
import { ManagementComponent } from './module/curso/management/management.component';
import { SearchComponent } from './module/curso/search/search.component';
import { ShoppingCartComponent } from './module/curso/shopping-cart/shopping-cart.component';
import { TrackingComponent } from './module/curso/tracking/tracking.component';
import { AddCursoComponent } from './module/venda/add-curso/add-curso.component';
import { CreateVendaComponent } from './module/venda/create-venda/create-venda.component';
import { DetailsVendaComponent } from './module/venda/details-venda/details-venda.component';
import { EditVendasComponent } from './module/venda/edit-vendas/edit-vendas.component';
import { ManagementVendasComponent } from './module/venda/management-vendas/management-vendas.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'search/:nome', component: SearchComponent},
  { path: 'search2/:pais', component: SearchComponent},
  { path: 'clientes', component: ManagementClienteComponent},
  { path: 'clientes/create', component: CreateClienteComponent},
  { path: 'clientes/edit/:id', component: EditClienteComponent},
  { path: 'clientes/details/:id', component: DetailsComponent},
  { path: 'vendas', component: ManagementVendasComponent},
  { path: 'vendas/create', component: CreateVendaComponent},
  { path: 'vendas/details/:id', component: DetailsVendaComponent},
  { path: 'vendas/edit/:id', component: EditVendasComponent},
  { path: 'vendas/:id/add_curso', component: AddCursoComponent},
  { path: 'shopping_cart', component: ShoppingCartComponent},
  { path: 'buy', component: BuyComponent},
  { path: 'tracking', component: TrackingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
