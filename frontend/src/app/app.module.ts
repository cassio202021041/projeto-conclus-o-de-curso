import { AdminRoutingModule } from './module/admin/admin-routing.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { CursoModule } from "./module/curso/curso.module";
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
import { PrincipalComponent } from './pages/compartilhado/principal/principal.component';
import { HomeLoginComponent } from './pages/home-login/home-login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './module/curso/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    HomeLoginComponent,
    HomeComponent
  




  ],
  exports:[


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunoModule,
    VendaModule,
    VideoModule,
    FormsModule,
    AdminModule,
    AdminRoutingModule,
    MatProgressBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    CoreModule,
    CursoModule




  ],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
