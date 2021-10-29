import React from "react";
import PropTypes from "prop-types";

const CommentsList = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.name}</p>
          <p>{comment.timestamp}</p>
          <p>{comment.comment}</p>
        </div>
      ))}
    </>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentsList;
