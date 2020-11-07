import React, { useCallback, useState } from 'react';

interface IProps {
  addNote: (title: string) => void;
} 

export function AddNoteWrapper(props: IProps) {
  const [title, setTitle] = useState<string>('');

  const onAddCallback = useCallback(
    () => {
      if (title) {
        props.addNote(title);
        setTitle('');
      }
    },
    [title],
  );

  return (
    <div className="add-note-wrapper">
      <div className="note-title-wrapper">
        <input 
          className="note-title-input" 
          placeholder="Note title..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          />
      </div>
      <div 
        className="add-note-button" 
        onClick={onAddCallback}>
        +
      </div>
    </div>
  );
}
