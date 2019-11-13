import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { Button, Input } from 'semantic-ui-react';

const Comments = ({ 
  note, 
  switchAddingViewingComments, 
  publishComment 
}) => {
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentContent, setCommentContent] = useState('');
  let commentsCell = <td className="cell">
    <Button 
      type="button"
      style={{'width': '48%'}}
      id={note.id} 
      onClick={(e) => switchAddingViewingComments(e.target.id, 'addingComment')}
    >
      Add comment
    </Button>
    <Button 
      type="button"
      style={{'width': '48%'}}
      id={note.id}
      onClick={(e) => {
        if (!note.comments.length) {
          alert("No comments yet");
          return;
        }

        switchAddingViewingComments(e.target.id, 'viewingComments');
      }}
    >
      Show comments
    </Button>
  </td>;

  const addComment = (event) => {
    event.preventDefault();
    const names = commentAuthor.split(' ');

    if (names.length !== 2) {
      alert("You must write your full name");
      return;
    }
    if (!names.every(word => word[0].match(/[A-ZА-Я]/))) {
      alert("Name must start with capital letter");
      return;
    }
    
    const currentDate = new Date();
    let dd = currentDate.getDate();
    let mm = currentDate.getMonth() + 1;
    const yyyy = currentDate.getFullYear();

    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }
    
    const date = `${dd}.${mm}.${yyyy}`;
    const newComment = {
      content: commentContent,
      author: commentAuthor,
      date,
    }
    const targetId = event.target.id;
    
    publishComment(targetId, newComment);
  }

  if (note.addingComment) {
    commentsCell = <td className="cell">
      <form id={note.id} onSubmit={addComment}>
        <Input 
          type="text" 
          placeholder="Your Full Name" 
          value={commentAuthor}
          onChange={(e) => {
            setCommentAuthor(e.target.value)
          }}
          style={{'width': '30%'}}
          focus
          required
        />
        <Input 
          type="text" 
          placeholder="Your comment" 
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          style={{'width': '30%'}}
          focus
          required
        />
        <Button type="submit" style={{'width': '19%'}}>
          Submit
        </Button>
        <Button 
          type="button" 
          style={{'width': '19%'}}
          onClick={() => switchAddingViewingComments(note.id, 'addingComment')}
        >
          Cancel
        </Button>
      </form>
    </td>
  } else if (note.viewingComments) {
    commentsCell = <td className="cell"><ul>
      <Button 
        type="button" 
        id={note.id}
        onClick={(e) => switchAddingViewingComments(e.target.id, 'viewingComments')}
      >
        Hide comments
      </Button>
      {note.comments.map(comment => <Comment 
        comment={comment} 
        key={note.id}
      />)}
    </ul></td>
  }

  return commentsCell;
};

Comments.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    noteName: PropTypes.string,
    noteContent: PropTypes.string,
    editing: PropTypes.bool,
    comments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Comments;