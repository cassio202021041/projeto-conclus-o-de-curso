import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { VideoModule } from "../video/video.module";



@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    VideoModule
],

})
export class AdminModule { }
