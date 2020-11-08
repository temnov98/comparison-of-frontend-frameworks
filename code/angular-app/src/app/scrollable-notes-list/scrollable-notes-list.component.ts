import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'scrollable-notes-list',
  template: `
    <div class="scrollable-notes-list">
      <div *ngFor="let note of appService.notes; index as i">
        <note-item 
          [title]="note.title"
          [active]="i === appService.currentIndex"
          [id]="note.id"
          ></note-item>
      </div>
    </div>
  `,
  styleUrls: ['./scrollable-notes-list.component.css']
})
export class ScrollableNotesListComponent {
  constructor(public appService: AppService) {}
}
