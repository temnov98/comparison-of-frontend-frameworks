import { Injectable } from '@angular/core';
import { INoteModel } from './note-model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  readonly notes: INoteModel[] = [];
  currentIndex: number | undefined;
  
  constructor() { }

  public addNote(title: string): void {
    if (!title) {
      return;
    }

    this.notes.push({
      id: Date.now().toString(),
      title,
      content: '',
    });
  }

  public changeCurrentIndex(id: string) {
    this.currentIndex = this.notes.findIndex(note => note.id === id);
  }
}
