import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'add-note-wrapper',
  template: `
    <div class="add-note-wrapper">
      <div class="note-title-wrapper">
        <input 
          class="note-title-input" 
          placeholder="Note title..."
          [(ngModel)]="title"
          />
      </div>
      <div 
        class="add-note-button"
        (click)="addNote()"
        >
        +
      </div>
    </div>
  `,
  styleUrls: ['./add-note-wrapper.component.css']
})
export class AddNoteWrapperComponent {
  title: string = '';

  constructor(private appService: AppService) { }

  addNote() {
    this.appService.addNote(this.title);
    this.title = '';
  }
}
