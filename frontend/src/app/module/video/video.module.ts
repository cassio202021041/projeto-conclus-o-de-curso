import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoHomeComponent } from './video-home/video-home.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoFormComponent } from './video-form/video-form.component';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from './safe-url.pipe';
import { AdminModule } from "../admin/admin.module";
import { FooterComponent } from './template/footer/footer1.component';
import { HeaderComponent } from './template/header/header1.component';
import { NavComponent } from './template/nav/nav1.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForDirective } from './directives/for.directive';
import { RedDirective } from './directives/red.directive';





@NgModule({
  declarations: [
    VideoHomeComponent,
    VideoListComponent,
    VideoFormComponent,
    SafeUrlPipe,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ForDirective,
    RedDirective




  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,




],
  exports: [
    VideoListComponent,
    VideoFormComponent,


  ],


schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class VideoModule { }
