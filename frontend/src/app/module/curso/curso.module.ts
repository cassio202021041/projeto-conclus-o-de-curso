import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { BuyComponent } from "./buy/buy.component";
import { CreateComponent } from "./create/create.component";
import { CursoRoutingModule } from "./curso-routing.module";
import { DetailsComponent } from "./details/details.component";
import { EditComponent } from "./edit/edit.component";
import { HomeComponent } from "./home/home.component";
import { ManagementComponent } from "./management/management.component";
import { SearchComponent } from "./search/search.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { TrackingComponent } from "./tracking/tracking.component";
import { CoreModule } from "../../core/core.module";




@NgModule({
  declarations: [
   
    DetailsComponent,
    ManagementComponent,
    CreateComponent,
    EditComponent,
    SearchComponent,
    ShoppingCartComponent,
    BuyComponent,
    TrackingComponent
  
  ],
  imports: [
    CommonModule,
    CursoRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule

  ]
})
export class CursoModule { }
