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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';







@NgModule({
  declarations: [
    AppComponent,
  ],
  exports:[


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
    AdminRoutingModule,
    MatProgressBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    MatToolbarModule,
    MatIconModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
