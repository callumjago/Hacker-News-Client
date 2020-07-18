import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { StoryComponent } from './story/story.component';
import { StoryContainerComponent } from './story-container/story-container.component';
import { SearchOptionsComponent } from './search-options/search-options.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    StoryComponent,
    StoryContainerComponent,
    SearchOptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
