import { Component } from '@angular/core';
import { Video, VideoService } from '../video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrl: './video-home.component.scss'
})
export class VideoHomeComponent {
  videos: Video[] = [];

  constructor(private videoService: VideoService, private router: Router) { }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe(videos => this.videos = videos);
  }
  voltarParaHome() {
    this.router.navigate(['/']);
  }

}
