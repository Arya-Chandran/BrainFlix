import React from "react";
import Comment from "../Comment";
import "./CommentsList.scss";
import {computeTimestamp} from '../Utils/Utils';

function CommentsList(props) {
  return (
    <ul className="comment__cards">
      {props.comments.map((comment) => {
        const newTimestamp = computeTimestamp(comment.timestamp)
        return (
          <li className="comment__card" key={comment.id}>
            <Comment
              id={comment.id}
              name={comment.name}
              timestamp={newTimestamp}
              comment={comment.comment}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CommentsList;
