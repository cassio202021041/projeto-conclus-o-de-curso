import { NgModule } from "@angular/core";
import { CreateClienteComponent } from "./create-cliente/create-cliente.component";
import { EditClienteComponent } from "./edit-cliente/edit-cliente.component";
import { ManagementClienteComponent } from "./management-cliente/management-cliente.component";
import { DetailsClienteComponent } from "./details-cliente/details-cliente.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CoreModule } from "../../core/core.module";
import { ClienteRoutingModule } from "./cliente-routing.module";



@NgModule({
  declarations: [
    ManagementClienteComponent,
    EditClienteComponent,
    DetailsClienteComponent,
    CreateClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class ClienteModule { }
