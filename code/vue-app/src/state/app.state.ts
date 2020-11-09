import { INoteModel } from '@/models/note.model';

export interface IGlobalState {
  notes: INoteModel[];
  currentIndex: number | undefined;
  currentNote: string;
}

export const GlobalState: IGlobalState = {
  notes: [],
  currentIndex: undefined,
  get currentNote(): string {
    if (this.currentIndex !== undefined) {
      return this.notes[this.currentIndex].content;
    }

    return '';
  },

  set currentNote(value: string) {
    if (this.currentIndex !== undefined) {
      this.notes[this.currentIndex].content = value;
    }
  },
};
