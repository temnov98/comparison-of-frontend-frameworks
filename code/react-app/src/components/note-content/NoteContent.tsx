import React from 'react';
import { INoteModel } from '../../models/note.model';

interface IProps {
  note?: INoteModel;
  changeContent: (id: string, content: string) => void;
}

export function NoteContent(props: IProps) {
  const { changeContent, note } = props;

  return (
    <div className="note-content-wrapper">
      <textarea 
        className="note-content" 
        placeholder="Note content..." 
        value={note?.content}
        onChange={(event) => {
          const changeValue = event.target.value;
          if (note) {
            changeContent(note.id, changeValue);
          }
        }}
        >
      </textarea>
    </div>
  );
}
