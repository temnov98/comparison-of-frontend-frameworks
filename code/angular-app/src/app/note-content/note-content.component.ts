import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'note-content',
  template: `
  <div class="note-content-wrapper">
    <textarea 
      class="note-content" 
      placeholder="Note content..." 
      [(ngModel)]="content"
      >
    </textarea>
  </div>
  `,
  styleUrls: ['./note-content.component.css']
})
export class NoteContentComponent {
  get content(): string {
    if (this.appService.currentIndex === undefined) {
      return '';
    }
    
    return this.appService.notes[this.appService.currentIndex].content;
  }

  set content(value: string) {
    if (this.appService.currentIndex === undefined) {
      return;
    }

    this.appService.notes[this.appService.currentIndex].content = value;
  }

  constructor(public appService: AppService) {}
}
