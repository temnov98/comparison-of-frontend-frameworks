import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="content">
      <div class="notes-list">
        <add-note-wrapper></add-note-wrapper>
        <scrollable-notes-list></scrollable-notes-list>
      </div>
      <note-content></note-content>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
}
