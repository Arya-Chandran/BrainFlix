import React from "react";
import PropTypes from "prop-types";
import Comment from '../Comment/Comment'
import './CommentsList.scss'


function CommentsList(props) {
    return (
      <ul className="comment__cards">
        {props.comments.map((comment) => {
          return (
            <li className="comment__card" key={comment.id}>
              <Comment
                id={comment.id}
                name={comment.name}
                timestamp={comment.timestamp}
                comment={comment.comment}
              />
            </li>
          );
        })}
      </ul>
    );
  }


CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentsList;


