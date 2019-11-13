import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

const NotesTable = ({ notes, setNoteList }) => {
  let theadContent = <tr><th>No notes found</th></tr>;

  if (notes.length > 0) {
    theadContent = <tr>
      <th className="cell">
        Id
      </th>
      <th className="cell">
        Note name
      </th>
      <th className="cell">
        Note content
      </th>
      <th className="cell">
        Comments
      </th>
      <th className="cell">
        Delete
      </th>
    </tr>
  }

  return (
    <table className="table">
      <thead className="thead">
        {theadContent}
      </thead>
      <tbody>
        {notes.map(note => (
          <NoteItem 
            note={note} 
            key={note.id} 
            setNoteList={setNoteList} 
            notes={notes} 
          />
        ))}
      </tbody>
    </table>
  );
};

NotesTable.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setNoteList: PropTypes.func.isRequired,
};

export default NotesTable;
