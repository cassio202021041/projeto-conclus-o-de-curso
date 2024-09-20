import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreRoutingModule } from "./core-routing.module";
import { FooterComponent } from "./footer/footer.component";
import { LoadingComponent } from "./loading/loading.component";
import { HeaderComponent } from "./header/header.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { AppRoutingModule } from "../app-routing.module";
import { MatIconModule } from '@angular/material/icon';






@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    AppRoutingModule,
    MatIconModule


  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class CoreModule { }
