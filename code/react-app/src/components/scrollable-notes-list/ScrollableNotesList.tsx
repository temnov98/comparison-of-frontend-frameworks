import React from 'react';
import { INoteModel } from '../../models/note.model';
import { NoteItem } from '../note-item/NoteItem';

interface IProps {
  notes: INoteModel[];
  setCurrentNote: (id: string) => void;
  currentNoteIndex?: number;
}

export function ScrollableNotesList(props: IProps) {
  return (
    <div className="scrollable-notes-list">
      {props.notes.map((note, index) => (
        <NoteItem 
          note={note} 
          setCurrentNote={props.setCurrentNote}
          isActive={index === props.currentNoteIndex}
          />
      ))}
    </div>
  );
}
