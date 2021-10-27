import Comment from "./Comment";

function CommentsList(props) {
  console.log("CommentsList props", props);
  return (
    <ul>
      {props.videos.map((video) => {
        return (
          <li key={video.id}>
            <Comment
              comments={video.comments}
             
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CommentsList;
