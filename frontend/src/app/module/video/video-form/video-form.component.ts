import { Component, OnInit } from '@angular/core';
import { Video, VideoService } from '../video.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrl: './video-form.component.scss'
})
export class VideoFormComponent implements OnInit{
  video: Video = { title: '', url: '' };
  isEdit: boolean = false;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  voltarParaHome() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.videoService.getVideo(+id).subscribe(video => {
        this.video = video;
      });
    }
  }

  save(): void {
    if (this.isEdit) {
      this.videoService.updateVideo(this.video.id!, this.video).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.videoService.createVideo(this.video).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
