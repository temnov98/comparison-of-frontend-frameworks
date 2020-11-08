import { Component, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'note-item',
  template: `
    <div class="note-item" [ngClass]="{'active-note-item': active}" (click)="setCurrent()">
      {{ title }}
    </div>
  `,
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent {
  @Input() title: string;
  @Input() id: string;
  @Input() active: boolean;

  constructor(private appService: AppService) { }

  setCurrent(): void {
    this.appService.changeCurrentIndex(this.id);
  }
}
