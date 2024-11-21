import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAlunoComponent } from './module/aluno/create-aluno/create-aluno.component';
import { DetailsAlunoComponent } from './module/aluno/details-aluno/details-aluno.component';
import { EditAlunoComponent } from './module/aluno/edit-aluno/edit-aluno.component';
import { ManagementAlunoComponent } from './module/aluno/management-aluno/management-aluno.component';
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
import { VideoHomeComponent } from './module/video/video-home/video-home.component';
import { VideoFormComponent } from './module/video/video-form/video-form.component';
import { AdminHomeComponent } from './module/admin/admin-home/admin-home.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeLoginComponent } from './pages/home-login/home-login.component';
import { PrincipalComponent } from './pages/compartilhado/principal/principal.component';
import { NavComponent } from './module/video/template/nav/nav1.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'admin', component: AdminHomeComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'search/:nome', component: SearchComponent },
  { path: 'search2/:idioma', component: SearchComponent },
  { path: 'alunos', component: ManagementAlunoComponent },
  { path: 'alunos/create', component: CreateAlunoComponent },
  { path: 'alunos/edit/:id', component: EditAlunoComponent },
  { path: 'alunos/details/:id', component: DetailsAlunoComponent },
  { path: 'vendas', component: ManagementVendasComponent },
  { path: 'vendas/create', component: CreateVendaComponent },
  { path: 'vendas/details/:id', component: DetailsVendaComponent },
  { path: 'vendas/edit/:id', component: EditVendasComponent },
  { path: 'vendas/:id/add_curso', component: AddCursoComponent },
  { path: 'shopping_cart', component: ShoppingCartComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'videos', component: VideoHomeComponent },
  { path: 'editvideo/:id', component: VideoFormComponent },
  { path: 'add', component: VideoFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login_admin', component: HomeLoginComponent },
  { path: 'pc', component: PrincipalComponent },
  { path: 'nav', component: NavComponent},
    { path: '**', redirectTo: '' },
  { path: 'add', component: VideoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
