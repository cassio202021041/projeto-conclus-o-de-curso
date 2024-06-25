import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ClienteRoutingModule } from "./cliente-routing.module";
import { CreateClienteComponent } from "./create-cliente/create-cliente.component";
import { EditClienteComponent } from "./edit-cliente/edit-cliente.component";
import { ManagementClienteComponent } from "./management-cliente/management-cliente.component";
import { CoreModule } from "../../core/core.module";


@NgModule({
  declarations: [
    ManagementClienteComponent,
    EditClienteComponent,
    EditClienteComponent,
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
