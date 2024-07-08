import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CoreModule } from "../../core/core.module";
import { AlunoRoutingModule } from "./aluno-routing.module";
import { CreateAlunoComponent } from "./create-aluno/create-aluno.component";
import { DetailsAlunoComponent } from "./details-aluno/details-aluno.component";
import { EditAlunoComponent } from "./edit-aluno/edit-aluno.component";
import { ManagementAlunoComponent } from "./management-aluno/management-aluno.component";




@NgModule({
  declarations: [
    ManagementAlunoComponent,
    EditAlunoComponent,
    DetailsAlunoComponent,
    CreateAlunoComponent
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class AlunoModule { }
