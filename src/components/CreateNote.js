import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Button, TextArea } from 'semantic-ui-react';

const CreateNote = ({ notes, setNoteList, id, setId }) => {
  const [noteName, setNoteName] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const addNote = (event) => {
    event.preventDefault();

    if (!noteContent) {
      alert("You must add note content");
      return;
    }

    const newNote = {
      id,
      noteName,
      noteContent,
      editing: false,
      addingComment: false,
      viewingComments: false,
      comments: [],
    };

    setNoteList([...notes, newNote]);
    setId(id + 1);
    setNoteContent('');
    setNoteName('');
  }

  return (
    <form onSubmit={addNote} className="create-note-form ui form">
      <Input 
        type="text"
        value={noteName} 
        onChange={(e) => setNoteName(e.target.value)}
        placeholder="Note name"
        required
      />
      <TextArea 
        placeholder="Note content" 
        value={noteContent} 
        onChange={(e) => setNoteContent(e.target.value)}
      />
      <Button type="submit">Add note</Button>
    </form>
  );
};

CreateNote.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setNoteList: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  setId: PropTypes.func.isRequired,
};

export default CreateNote;
