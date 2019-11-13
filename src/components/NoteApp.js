import React, { useState, useEffect } from 'react';
import CreateNote from './CreateNote';
import NoteTable from './NoteTable';

const NotesApp = () => {
  const [notes, setNoteList] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    const notesFromStorage = JSON.parse(localStorage.getItem('noteList'));
    const noteIdFromStorage = +localStorage.getItem('noteId');

    if (notesFromStorage && notesFromStorage.length > 0) {
      setNoteList([...notesFromStorage]);
      setId(noteIdFromStorage);
    }
  }, [])

  useEffect(() => {
    const noteListJson = JSON.stringify(notes);
    localStorage.setItem('noteList', noteListJson);
    localStorage.setItem('noteId', id);
  }, [notes, id])

  return (
    <>
      <header className="header">Notes</header>
      <CreateNote 
        setNoteList={setNoteList} 
        notes={notes} 
        id={id}
        setId={setId} 
      />
      <NoteTable notes={notes} setNoteList={setNoteList} />
    </>
  );
};

export default NotesApp;