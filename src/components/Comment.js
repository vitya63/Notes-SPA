import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => (
  <li className="comment">
    <p className="comment__detail">
      <b>Author: </b>{comment.author}
    </p>
    <p className="comment__detail">
      <b>Comment: </b>{comment.content}
    </p>
    <p className="comment__detail">
      <b>Publication date: </b>{comment.date}
    </p>
  </li>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string
  }).isRequired,
};

export default Comment;