import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  title = Date.now().toString();

  constructor() { }

  ngOnInit(): void {
  }

}
