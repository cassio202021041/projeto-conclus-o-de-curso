import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoHomeComponent } from './video-home/video-home.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoFormComponent } from './video-form/video-form.component';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from './safe-url.pipe';




@NgModule({
  declarations: [
    VideoHomeComponent,
    VideoListComponent,
    VideoFormComponent,
    SafeUrlPipe,



  ],
  imports: [
    CommonModule,
    FormsModule


  ],
  exports: [
    VideoListComponent,
    VideoFormComponent
  ]
})
export class VideoModule { }
