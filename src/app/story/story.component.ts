import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  @Input() title: string;
  @Input() url: string;
  @Input() score: number;

  constructor() { }

  ngOnInit(): void {
  }

}
