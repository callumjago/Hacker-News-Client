import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Story } from './story/story';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private storyUrl = 'https://hackernewsapi.azurewebsites.net/api/Item/new'

  constructor(
    private http: HttpClient
  ) { }

  public getStories(page: number, pageSize: number, title: string) {
    const headers = new HttpHeaders({'page': page.toString(), 'pageSize':pageSize.toString(), 'title':title});
    return this.http.get(this.storyUrl, {headers: headers});
  }
}
