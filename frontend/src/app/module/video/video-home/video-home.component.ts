import { Component } from '@angular/core';
import { Video, VideoService } from '../video.service';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrl: './video-home.component.scss'
})
export class VideoHomeComponent {
  videos: Video[] = [];

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe(videos => this.videos = videos);
  }

}
