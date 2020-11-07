import React from 'react';
import { INoteModel } from '../../models/note.model';

interface IProps {
  note: INoteModel;
  setCurrentNote: (id: string) => void;
  isActive: boolean;
}

export function NoteItem(props: IProps) {
  let className = 'note-item';
  if (props.isActive) {
    className += ' active-note-item';
  }

  return (
    <div className={className} onClick={() => props.setCurrentNote(props.note.id)}>
      {props.note.title}
    </div>
  );
}
