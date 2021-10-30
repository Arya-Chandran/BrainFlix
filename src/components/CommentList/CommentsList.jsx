import React from "react";
import PropTypes from "prop-types";
import Comment from '../Comment/Comment'
import './CommentsList.scss'


function CommentsList(props) {
  //   console.log("VideosList props", props);
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



// const CommentsList = ({ comments }) => {
//   <h3>Next videos </h3>
//   return (
//     <>
//       {comments.map((comment) => (
//         <div key={comment.id}>
//           <p>{comment.name}</p>
//           <p>{comment.timestamp}</p>
//           <p>{comment.comment}</p>
//         </div>
//       ))}
//     </>
//   );
// };