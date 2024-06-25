import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  { path: 'clientes/details/:id', component: DetailsClienteComponent},
  { path: 'vendas', component: ManagementVendasComponent},
  { path: 'vendas/create', component: CreateVendaComponent},
  { path: 'vendas/details/:id', component: DetailsVendaComponent},
  { path: 'vendas/edit/:id', component: EditVendasComponent},
  { path: 'vendas/:id/add_curso', component: AddCursoComponent},
  { path: 'shopping_cart', component: ShoppingCartComponent},
  { path: 'buy', component: BuyComponent},
  { path: 'tracking', component: TrackingComponent},
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
