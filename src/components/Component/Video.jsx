function Video(props) {
    console.log('video props', props);
    return (
      <article>
        <img src={props.image} alt={props.title} />
        <p>{props.title}</p>
        <h3>{props.channel}</h3>
      </article>
    );
  }
  
  export default Video;