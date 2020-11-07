import React, { useCallback, useEffect, useState } from 'react';
import { INoteModel } from '../../models/note.model';
import { AddNoteWrapper } from '../add-note-wrapper/AddNoteWrapper';
import { NoteContent } from '../note-content/NoteContent';
import { ScrollableNotesList } from '../scrollable-notes-list/ScrollableNotesList';
import './App.css';

function App() {
  const [notes, setNotes] = useState<INoteModel[]>([]);
  const [currentNoteIndex, setCurrentNoteIndex] = useState<number | undefined>(2);

  const clickedNoteItemCallback = useCallback(
    (id: string) => {
      const result = notes.findIndex(note => note.id === id);
      setCurrentNoteIndex(result);
    },
    [notes],
  );

  const addedNoteCallback = useCallback(
    (title: string) => {
      console.log({ notes });
      const newNote: INoteModel = {
        title,
        id: Date.now().toString(),
        content: '',
      };

      setNotes([...notes, newNote]);
    },
    [notes],
  );

  const note = (currentNoteIndex !== undefined) ? notes[currentNoteIndex] : undefined;

  return (
    <div className="content">
      <div className="notes-list">
        <AddNoteWrapper addNote={addedNoteCallback} />
        <ScrollableNotesList 
          notes={notes} 
          setCurrentNote={clickedNoteItemCallback}
          currentNoteIndex={currentNoteIndex}
          />
      </div>
      <NoteContent 
        note={note}
        changeContent={(id: string, content: string) => {
          console.log(content);
          const result = notes.find(note => note.id === id);
          if (result) {
            result.content = content;
            setNotes([...notes]);
          }
        }}
        />
    </div>
  );
}

export default App;
