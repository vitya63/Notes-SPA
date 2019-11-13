import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import { Input, Button } from 'semantic-ui-react';

function NoteItem({ note, notes, setNoteList }) {
  const [noteName, setNoteName] = useState(note.noteName);
  const [noteContent, setNoteContent] = useState(note.noteContent);

  const removeNote = () => {
    setNoteList([...notes].filter(item => item !== note));
  };

  const editNote = (e) => {
    const noteIndex = notes.findIndex(item => item.id === +e.target.id);
    let updatedNotes = [...notes];
    updatedNotes[noteIndex].editing = true;
    setNoteList([...updatedNotes]);
  }

  const submitChanges = (e) => {
    if (e.which === 13 || e.keyCode === 13) {
      const noteIndex = notes.findIndex(item => item.id === +e.target.id);
      let updatedNotes = [...notes];
      updatedNotes[noteIndex].noteName = noteName;
      updatedNotes[noteIndex].noteContent = noteContent;
      updatedNotes[noteIndex].editing = false;
      setNoteList([...updatedNotes]);
    }
  }

  const switchAddingViewingComments = (targetId, action) => {
    const noteIndex = notes.findIndex(item => item.id === +targetId);
    let updatedNotes = [...notes];
    if (!updatedNotes[noteIndex][action]) {
      updatedNotes[noteIndex][action] = true;
    } else {
      updatedNotes[noteIndex][action] = false;
    }
    setNoteList([...updatedNotes]);
  }

  const publishComment = (targetId, comment) => {
    const noteIndex = notes.findIndex(item => item.id === +targetId);
    let updatedNotes = [...notes];
    updatedNotes[noteIndex].comments.push(comment);
    updatedNotes[noteIndex].addingComment = false;
    setNoteList([...updatedNotes]);
    alert('Comment succesfully added!');
  }

  return (
    <tr>
      <td className="cell">{note.id}</td>
      <td className="cell" id={note.id} onDoubleClick={editNote}>
        {note.editing 
          ? <Input 
            type="text" 
            value={noteName} 
            onChange={(e) => setNoteName(e.target.value)} 
            onKeyPress={submitChanges}
            id={note.id}
            className="input-for-editing"
            focus
          />
          : note.noteName
        }
      </td>
      <td className="cell" id={note.id} onDoubleClick={editNote}>
        {note.editing 
          ? <Input 
            type="text" 
            value={noteContent} 
            onChange={(e) => setNoteContent(e.target.value)} 
            onKeyPress={submitChanges}
            id={note.id}
            className="input-for-editing"
            focus
          />
          : note.noteContent
        }
      </td>
      <Comments 
        note={note} 
        switchAddingViewingComments={switchAddingViewingComments} 
        publishComment={publishComment}
      />
      <td className="cell">
        <Button style={{'width': '100%'}} type="button" onClick={removeNote}>
          Remove note
        </Button>
      </td>
    </tr>
  );
}

NoteItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    noteName: PropTypes.string,
    noteContent: PropTypes.string,
    editing: PropTypes.bool,
    comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setNoteList: PropTypes.func.isRequired
};

export default NoteItem;
