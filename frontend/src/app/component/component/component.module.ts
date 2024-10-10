import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { LoginLayoutComponent } from '../login-layout/login-layout.component';



@NgModule({
  declarations: [
    LoginComponent,
    LoginLayoutComponent
  ],
  imports: [
    CommonModule,
  ],

  exports:[
    LoginComponent,
    LoginLayoutComponent

  ]
})
export class ComponentModule { }
