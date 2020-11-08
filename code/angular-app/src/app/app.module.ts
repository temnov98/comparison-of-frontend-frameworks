import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { AddNoteWrapperComponent } from './add-note-wrapper/add-note-wrapper.component';
import { NoteContentComponent } from './note-content/note-content.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { ScrollableNotesListComponent } from './scrollable-notes-list/scrollable-notes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNoteWrapperComponent,
    NoteContentComponent,
    NoteItemComponent,
    ScrollableNotesListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
