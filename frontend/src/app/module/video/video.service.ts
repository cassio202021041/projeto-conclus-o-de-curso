import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from './video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private apiUrl = 'http://localhost:8080/api/videos'; // URL da API
  private setCookieUrl = 'http://localhost:8080/api/set-cookie';
  private clearCookieUrl = 'http://localhost:8080/api/clear-cookie';

  constructor(private http: HttpClient) { }

  // Get all videos
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }

  // Get a single video by id
  getVideo(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.apiUrl}/${id}`, { withCredentials: true });
  }

  // Create a new video
  createVideo(video: Video): Observable<Video> {
    return this.http.post<Video>(this.apiUrl, video, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Update an existing video
  updateVideo(id: number, video: Video): Observable<Video> {
    return this.http.put<Video>(`${this.apiUrl}/${id}`, video, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Delete a video
  deleteVideo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  setCookie(): Observable<any> {
    return this.http.get<any>(this.setCookieUrl, { withCredentials: true });
  }

  clearCookie(): Observable<any> {
    return this.http.get<any>(this.clearCookieUrl, { withCredentials: true });
  }
}

export { Video };

