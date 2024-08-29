import { AdminRoutingModule } from './module/admin/admin-routing.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";import { CursoModule } from "./module/curso/curso.module";
import { VendaModule } from "./module/venda/venda.module";
import { AlunoModule } from "./module/aluno/aluno.module";
import { VideoModule } from "./module/video/video.module";
import { FormsModule } from "@angular/forms";
import { AdminModule } from "./module/admin/admin.module";





@NgModule({
  declarations: [
    AppComponent,
    




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule,
    AlunoModule,
    CoreModule,
    VendaModule,
    VideoModule,
    FormsModule,
    AdminModule,
    AdminRoutingModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
