import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoreRoutingModule } from "./core-routing.module";
import { FooterComponent } from "./footer/footer.component";
import { LoadingComponent } from "./loading/loading.component";
import { HeaderComponent } from "./header/header.component";





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
    ReactiveFormsModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent
  ]
})
export class CoreModule { }
