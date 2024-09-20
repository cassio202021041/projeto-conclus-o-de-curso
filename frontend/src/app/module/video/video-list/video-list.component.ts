import { Component } from '@angular/core';
import { Video, VideoService } from '../video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent {
  videos: Video[] = [];

  constructor(private videoService: VideoService, private router: Router) { }

  voltarParaHome() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(): void {
    this.videoService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

  deleteVideo(id: number): void {
    this.videoService.deleteVideo(id).subscribe(() => {
      this.loadVideos(); // Reload the list after deletion
    });
  }


}
