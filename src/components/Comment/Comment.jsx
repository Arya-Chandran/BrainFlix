import "./Comment.scss";

function Comment(props) {
  console.log("comment props", props);
  return (
    <article className="comment">
      <div className="comment__left">
        <img className="comment__image" />
      </div>
      <div className="comment__right">
        <div className="comment__top">
          <h3 className="comment__name">{props.name}</h3>
          <p className="comment__date">{props.timestamp}</p>
        </div>
        <div className="comment__bottom">
          <p className="comment__text">{props.comment}</p>
        </div>
      </div>
    </article>
  );
}

export default Comment;
