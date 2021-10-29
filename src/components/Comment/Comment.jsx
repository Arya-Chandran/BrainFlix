function Comment(props) {
    console.log('comment props', props);
    return (
      <article>
        <h3>{props.name}</h3>
        <p>{props.timestamp}</p>
        <p>{props.comment}</p>
      </article>
    );
  }
  
  export default Comment;
