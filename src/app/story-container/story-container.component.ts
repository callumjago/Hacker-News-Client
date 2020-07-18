import { Component, OnInit } from '@angular/core';
import { Story } from '../story/story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-container',
  templateUrl: './story-container.component.html',
  styleUrls: ['./story-container.component.css']
})
export class StoryContainerComponent implements OnInit {
  stories: Story[];
  page: number = 1;
  pageSize: number = 15;
  title: string = "";

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
    this.getStories();
  }

  getStories(): void {
    this.storyService.getStories(this.page, this.pageSize, this.title).subscribe((data: any[]) => {
      console.log(data);
      this.stories = data;
    })
  }

  setPage(newPage: number) {
    this.page = newPage;
  }

  setPageSize(newPageSize: number) {
    this.pageSize = newPageSize;
  }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }
}
